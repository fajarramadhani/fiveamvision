"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectEditor } from "@/components/admin/ProjectEditor";

type Status = "loading" | "login" | "ready";

function emptyProject(): Project {
  return {
    slug: "",
    title: "",
    category: "Wedding",
    subtitle: "",
    description: "",
    year: String(new Date().getFullYear()),
    credits: [{ role: "", name: "" }],
    gallery: [],
  };
}

export function AdminApp() {
  const [status, setStatus] = useState<Status>("loading");
  const [items, setItems] = useState<Project[]>([]);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/projects", { cache: "no-store" });
    if (!res.ok) {
      setStatus("login");
      return;
    }
    const data = await res.json();
    setItems(data.projects);
    setDirty(false);
    setStatus("ready");
  }, []);

  useEffect(() => {
    fetch("/api/admin/session", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => (d.authenticated ? load() : setStatus("login")))
      .catch(() => setStatus("login"));
  }, [load]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      setLoginError("Password salah.");
      return;
    }
    setPassword("");
    load();
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setDirty(false);
    setSaveMsg(null);
    setStatus("login");
  };

  const save = async () => {
    setSaving(true);
    setSaveMsg(null);
    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projects: items }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setSaveMsg({ ok: false, text: data.error ?? "Save failed." });
      } else {
        setDirty(false);
        setSaveMsg({ ok: true, text: data.message ?? "Saved." });
      }
    } catch (err) {
      setSaveMsg({ ok: false, text: String(err instanceof Error ? err.message : err) });
    } finally {
      setSaving(false);
    }
  };

  /* ── Loading ── */
  if (status === "loading") {
    return <p className="py-24 text-center text-sm uppercase tracking-widest text-steel">Loading…</p>;
  }

  /* ── Login ── */
  if (status === "login") {
    return (
      <div className="mx-auto max-w-sm py-24">
        <h1 className="font-display text-3xl font-bold tracking-tightest">FiveAM CMS</h1>
        <p className="mb-8 mt-2 text-sm text-steel">Masuk untuk mengelola portfolio.</p>
        <form onSubmit={login} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            autoFocus
            className="w-full border border-bone/20 bg-transparent px-4 py-3.5 text-sm text-bone transition-colors focus:border-mist focus:outline-none"
          />
          {loginError ? <p className="text-xs text-red-300">{loginError}</p> : null}
          <button type="submit" className="btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    );
  }

  /* ── Editor ── */
  return (
    <div>
      {/* Toolbar */}
      <div className="sticky top-16 z-30 -mx-5 mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-bone/15 bg-night/95 px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div className="flex items-center gap-3">
          <h1 className="font-display text-xl font-bold tracking-tightest">Portfolio CMS</h1>
          {dirty ? (
            <span className="rounded-full bg-mist/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-mist">
              Unsaved
            </span>
          ) : null}
        </div>
        <span className="text-xs text-steel/70">{items.length} projects</span>
        <div className="ml-auto flex flex-wrap items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="text-[11px] font-bold uppercase tracking-widest text-steel hover:text-bone"
          >
            View Site ↗
          </Link>
          <button
            type="button"
            onClick={logout}
            className="border border-bone/25 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-bone hover:bg-bone hover:text-night"
          >
            Logout
          </button>
          <button
            type="button"
            onClick={save}
            disabled={saving}
            className="btn-primary !px-5 !py-2 !text-[11px] disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </div>

      {saveMsg ? (
        <p
          role="status"
          className={`mb-8 border p-4 text-sm ${
            saveMsg.ok
              ? "border-mist/40 bg-mist/10 text-mist"
              : "border-red-400/40 bg-red-400/10 text-red-300"
          }`}
        >
          {saveMsg.text}
        </p>
      ) : null}

      <p className="mb-6 max-w-xl text-xs leading-relaxed text-steel/70">
        Setiap perubahan tersimpan sebagai commit di GitHub dan otomatis di-deploy Vercel.
        Urutan project di daftar = urutan tampil di website.
      </p>

      {/* Project list */}
      <div className="space-y-4 pb-24">
        {items.map((project, i) => (
          <ProjectEditor
            key={`${project.slug}-${i}`}
            project={project}
            isNew={Boolean(project.isNewDraft)}
            onChange={(next) => {
              const nextItems = [...items];
              nextItems[i] = next;
              setItems(nextItems);
              setDirty(true);
            }}
            onDelete={() => {
              setItems(items.filter((_, j) => j !== i));
              setDirty(true);
            }}
          />
        ))}

        <button
          type="button"
          onClick={() => {
            const draft = emptyProject();
            draft.isNewDraft = true;
            setItems([...items, draft]);
            setDirty(true);
          }}
          className="w-full border border-dashed border-bone/25 py-5 text-[11px] font-bold uppercase tracking-widest text-steel transition-colors hover:border-mist hover:text-mist"
        >
          + New Project
        </button>
      </div>
    </div>
  );
}

