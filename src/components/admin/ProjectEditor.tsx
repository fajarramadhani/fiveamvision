"use client";

import { useState } from "react";
import Image from "next/image";
import type { Credit, Project, ProjectCategory } from "@/lib/projects";
import { PROJECT_CATEGORIES } from "@/lib/projects";
import { slugifyTitle, uploadImage } from "@/lib/adminClient";

const inputClass =
  "w-full border border-bone/20 bg-transparent px-3 py-2.5 text-sm text-bone placeholder:text-steel/50 transition-colors focus:border-mist focus:outline-none";
const labelClass = "mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-steel/80";

interface Props {
  project: Project;
  isNew: boolean;
  onChange: (next: Project) => void;
  onDelete: () => void;
}

export function ProjectEditor({ project, isNew, onChange, onDelete }: Props) {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const set = <K extends keyof Project>(key: K, value: Project[K]) =>
    onChange({ ...project, [key]: value });

  const setCredit = (index: number, next: Partial<Credit>) => {
    const credits = project.credits.map((c, i) => (i === index ? { ...c, ...next } : c));
    set("credits", credits);
  };

  const handleUpload = async (
    files: FileList | null,
    apply: (urls: string[]) => void
  ) => {
    if (!files?.length) return;
    setUploading(true);
    setUploadError(null);
    try {
      const urls: string[] = [];
      for (const file of Array.from(files)) {
        urls.push(await uploadImage(file));
      }
      apply(urls);
    } catch (err) {
      setUploadError(String(err instanceof Error ? err.message : err));
    } finally {
      setUploading(false);
    }
  };

  return (
    <details open={isNew} className="group border border-bone/15">
      <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
        <span className="flex min-w-0 items-center gap-3">
          {project.featured ? (
            <span className="shrink-0 text-mist" title="Featured">★</span>
          ) : null}
          <span className="truncate font-display font-bold tracking-tight text-bone">
            {project.title || "[Untitled]"}
          </span>
          <span className="hidden shrink-0 rounded-full border border-bone/20 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-steel sm:inline">
            {project.category}
          </span>
        </span>
        <span aria-hidden="true" className="text-steel transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>

      <div className="space-y-6 border-t border-bone/10 p-5">
        {/* Title + slug + category + year */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Title</label>
            <input
              className={inputClass}
              value={project.title}
              onChange={(e) => set("title", e.target.value)}
              onBlur={() => {
                if (!project.slug) set("slug", slugifyTitle(project.title));
              }}
              placeholder="Project title"
            />
          </div>
          <div>
            <label className={labelClass}>Slug (URL)</label>
            <div className="flex gap-2">
              <input
                className={`${inputClass} font-mono text-xs`}
                value={project.slug}
                onChange={(e) => set("slug", e.target.value)}
                placeholder="auto-from-title"
              />
              <button
                type="button"
                onClick={() => set("slug", slugifyTitle(project.title))}
                title="Generate from title"
                className="shrink-0 border border-bone/20 px-3 text-xs uppercase tracking-widest text-steel hover:border-bone/50 hover:text-bone"
              >
                ↻
              </button>
            </div>
          </div>
          <div>
            <label className={labelClass}>Category</label>
            <select
              className={`${inputClass} appearance-none bg-night`}
              value={project.category}
              onChange={(e) => set("category", e.target.value as ProjectCategory)}
            >
              {PROJECT_CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Year</label>
            <input
              className={inputClass}
              value={project.year}
              onChange={(e) => set("year", e.target.value)}
              placeholder="2026"
            />
          </div>
        </div>

        {/* Subtitle + client */}
        <div className="grid gap-4 sm:grid-cols-[2fr_1fr]">
          <div>
            <label className={labelClass}>Subtitle / one-liner</label>
            <input
              className={inputClass}
              value={project.subtitle}
              onChange={(e) => set("subtitle", e.target.value)}
              placeholder="Short line shown on cards"
            />
          </div>
          <div>
            <label className={labelClass}>Client (optional)</label>
            <input
              className={inputClass}
              value={project.client ?? ""}
              onChange={(e) => set("client", e.target.value || undefined)}
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className={labelClass}>Story / description</label>
          <textarea
            className={`${inputClass} resize-y`}
            rows={4}
            value={project.description}
            onChange={(e) => set("description", e.target.value)}
            placeholder="Ceritanya project ini…"
          />
        </div>

          {/* Cover image + featured */}
        <div className="grid gap-4 sm:grid-cols-[200px_1fr]">
          <div className="relative aspect-[4/5] overflow-hidden border border-bone/15">
            {project.cover ? (
              <Image src={project.cover} alt="Cover preview" fill className="object-cover" sizes="200px" />
            ) : (
              <div className="ph-visual flex h-full items-center justify-center p-3 text-center text-[9px] uppercase tracking-widest text-steel/70">
                No cover yet
              </div>
            )}
          </div>
          <div className="space-y-3">
            <label className={labelClass}>Cover photo</label>
            <div className="flex flex-wrap items-center gap-3">
              <label className="btn-outline cursor-pointer !px-4 !py-2 !text-[10px]">
                {uploading ? "Uploading…" : "Upload cover"}
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  disabled={uploading}
                  onChange={(e) => handleUpload(e.target.files, ([url]) => set("cover", url))}
                />
              </label>
              {project.cover ? (
                <button
                  type="button"
                  onClick={() => set("cover", undefined)}
                  className="border-b border-bone/40 pb-0.5 text-[10px] uppercase tracking-widest text-steel hover:text-bone"
                >
                  Remove
                </button>
              ) : null}
            </div>
            <p className="text-xs leading-relaxed text-steel/60">
              JPG/PNG/WebP, max 8 MB. Foto live di website setelah deploy selesai (±1–2 menit).
            </p>
            <label className="flex items-center gap-2 pt-1 text-sm text-bone/90">
              <input
                type="checkbox"
                checked={Boolean(project.featured)}
                onChange={(e) => set("featured", e.target.checked)}
                className="h-4 w-4 accent-[#9DBEE8]"
              />
              Featured on homepage
            </label>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <label className={labelClass}>Gallery</label>
          <div className="flex flex-wrap gap-3">
            {(project.gallery ?? []).map((g, i) => (
              <div key={`${g}-${i}`} className="relative h-20 w-20 overflow-hidden border border-bone/15">
                <Image src={g} alt={`Gallery ${i + 1}`} fill className="object-cover" sizes="80px" />
                <button
                  type="button"
                  onClick={() => set("gallery", project.gallery!.filter((_, j) => j !== i))}
                  aria-label={`Remove gallery image ${i + 1}`}
                  className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center bg-night/80 text-xs text-bone hover:bg-night"
                >
                  ×
                </button>
              </div>
            ))}
            <label className="flex h-20 w-20 cursor-pointer flex-col items-center justify-center border border-dashed border-bone/25 text-center text-[9px] uppercase tracking-widest text-steel hover:border-mist hover:text-mist">
              {uploading ? "…" : "+ Add"}
              <input
                type="file"
                multiple
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                disabled={uploading}
                onChange={(e) =>
                  handleUpload(e.target.files, (urls) =>
                    set("gallery", [...(project.gallery ?? []), ...urls])
                  )
                }
              />
            </label>
          </div>
        </div>

          {/* Credits */}
        <div>
          <label className={labelClass}>Credits</label>
          <div className="space-y-2">
            {project.credits.map((credit, i) => (
              <div key={i} className="flex gap-2">
                <input
                  className={`${inputClass} w-44 shrink-0`}
                  value={credit.role}
                  onChange={(e) => setCredit(i, { role: e.target.value })}
                  placeholder="Role (Photography…)"
                />
                <input
                  className={inputClass}
                  value={credit.name}
                  onChange={(e) => setCredit(i, { name: e.target.value })}
                  placeholder="Name"
                />
                <button
                  type="button"
                  onClick={() => set("credits", project.credits.filter((_, j) => j !== i))}
                  aria-label="Remove credit"
                  className="shrink-0 border border-bone/20 px-3 text-sm text-steel hover:border-bone hover:text-bone"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => set("credits", [...project.credits, { role: "", name: "" }])}
              className="border-b border-bone/30 pb-0.5 text-[11px] font-bold uppercase tracking-widest text-steel hover:border-bone hover:text-bone"
            >
              + Add credit
            </button>
          </div>
        </div>

        {uploadError ? (
          <p className="border border-red-400/40 bg-red-400/10 p-3 text-xs text-red-300">{uploadError}</p>
        ) : null}

        <button
          type="button"
          onClick={() => {
            if (confirm(`Delete "${project.title}"? This is applied after you press Save Changes.`)) {
              onDelete();
            }
          }}
          className="border-b border-red-400/50 pb-0.5 text-[11px] font-bold uppercase tracking-widest text-red-300/80 hover:text-red-300"
        >
          Delete project
        </button>


      </div>

    </details>
  );
}
