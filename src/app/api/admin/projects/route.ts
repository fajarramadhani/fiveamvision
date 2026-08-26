import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { isAuthenticated } from "@/lib/auth";
import { githubConfigured, putFile } from "@/lib/github";
import { PROJECT_CATEGORIES, projects, slugify, type Project } from "@/lib/projects";

/** Return the current portfolio data. */
export async function GET() {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ ok: true, projects });
}

/**
 * Save the full portfolio list.
 * - Production: commits data/projects.json to GitHub → Vercel auto-deploys.
 * - Local dev (no GITHUB_TOKEN): writes directly to disk.
 */
export async function POST(req: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!Array.isArray(body?.projects)) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  // Sanitize + normalize before persisting.
  const seen = new Set<string>();
  const cleaned: Project[] = [];
  for (const raw of body.projects.slice(0, 200)) {
    const title = String(raw.title ?? "").trim();
    if (!title) continue;

    let slug = slugify(String(raw.slug ?? "") || title);
    while (seen.has(slug)) slug = `${slug}-${seen.size + 1}`;
    seen.add(slug);

    cleaned.push({
      slug,
      title,
      category: PROJECT_CATEGORIES.includes(raw.category)
        ? raw.category
        : "Personal",
      subtitle: String(raw.subtitle ?? "").trim(),
      description: String(raw.description ?? "").trim(),
      year: String(raw.year ?? "TBA").trim() || "TBA",
      client: raw.client ? String(raw.client).trim() : undefined,
      credits: Array.isArray(raw.credits)
        ? raw.credits
            .map((c: { role?: unknown; name?: unknown }) => ({
              role: String(c?.role ?? "").trim(),
              name: String(c?.name ?? "").trim(),
            }))
            .filter((c: { role: string; name: string }) => c.role || c.name)
        : [],
      featured: Boolean(raw.featured),
      cover: raw.cover ? String(raw.cover) : undefined,
      gallery: Array.isArray(raw.gallery)
        ? raw.gallery.map((g: unknown) => String(g)).filter(Boolean)
        : [],
    });
  }

  const jsonText = `${JSON.stringify(cleaned, null, 2)}\n`;

  if (githubConfigured()) {
    try {
      await putFile({
        path: "data/projects.json",
        content: jsonText,
        message: `CMS: update portfolio (${cleaned.length} projects)`,
      });
      return NextResponse.json({
        ok: true,
        mode: "github",
        message:
          "Saved & committed to GitHub. Vercel is deploying — live in ±1–2 minutes.",
      });
    } catch (err) {
      const raw = String(err);
      const hint = raw.includes("403")
        ? " Token GitHub kamu belum punya izin menulis. Buka github.com/settings/personal-access-tokens → pilih token → pastikan Repository access memuat repo fiveamvision dan Permission 'Contents' = Read and write."
        : "";
      return NextResponse.json(
        { error: `GitHub commit failed: ${raw.slice(0, 240)}${hint}` },
        { status: 502 }
      );
    }
  }

  if (process.env.NODE_ENV !== "production") {
    fs.writeFileSync(path.join(process.cwd(), "data", "projects.json"), jsonText, "utf8");
    return NextResponse.json({
      ok: true,
      mode: "local",
      message: "Saved to local data/projects.json.",
    });
  }

  return NextResponse.json(
    { error: "GITHUB_TOKEN is not configured on this deployment." },
    { status: 500 }
  );
}
