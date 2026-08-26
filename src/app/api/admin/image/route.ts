import { NextResponse } from "next/server";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { isAuthenticated } from "@/lib/auth";
import { githubConfigured, putFile } from "@/lib/github";

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB
const ALLOWED: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

/**
 * Upload a photo into the repo under public/images/projects/.
 * The file becomes publicly available at /images/projects/<name>
 * once Vercel finishes auto-deploying (~1–2 min).
 */
export async function POST(req: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await req.formData().catch(() => null);
  const file = form?.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }
  const ext = ALLOWED[file.type];
  if (!ext) {
    return NextResponse.json(
      { error: "Only JPG, PNG or WebP images are allowed." },
      { status: 400 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Image must be under 8 MB." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const name = `${Date.now()}-${crypto.randomBytes(4).toString("hex")}${ext}`;
  const repoPath = `public/images/projects/${name}`;
  const url = `/images/projects/${name}`;

  if (githubConfigured()) {
    try {
      await putFile({
        path: repoPath,
        content: buffer,
        message: `CMS: upload image ${name}`,
      });
      return NextResponse.json({ ok: true, url, mode: "github" });
    } catch (err) {
      const raw = String(err);
      const hint = raw.includes("403")
        ? " Token GitHub kamu belum punya izin menulis (Contents: Read and write)."
        : "";
      return NextResponse.json(
        { error: `GitHub upload failed: ${raw.slice(0, 240)}${hint}` },
        { status: 502 }
      );
    }
  }

  if (process.env.NODE_ENV !== "production") {
    const dir = path.join(process.cwd(), "public", "images", "projects");
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, name), buffer);
    return NextResponse.json({ ok: true, url, mode: "local" });
  }

  return NextResponse.json(
    { error: "GITHUB_TOKEN is not configured on this deployment." },
    { status: 500 }
  );
}
