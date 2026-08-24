/**
 * GitHub Contents API helper — the CMS saves `data/projects.json` and
 * uploaded images directly to the repository. Pushes to `main` trigger
 * an automatic Vercel deployment, so content edits go live by themselves.
 *
 * Requires: GITHUB_TOKEN (fine-grained PAT, Contents: Read and write),
 * GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH.
 */

const OWNER = process.env.GITHUB_OWNER ?? "fajarramadhani";
const REPO = process.env.GITHUB_REPO ?? "fiveamvision";
const BRANCH = process.env.GITHUB_BRANCH ?? "main";

export function githubConfigured(): boolean {
  return Boolean(process.env.GITHUB_TOKEN && OWNER && REPO);
}

async function api(path: string, init?: RequestInit): Promise<Response> {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${encodeURI(path)}${init?.method === "PUT" ? "" : `?ref=${BRANCH}`}`;
  return fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });
}

interface PutFileOptions {
  path: string; // repo-relative, e.g. "data/projects.json"
  content: string | Buffer;
  message: string; // commit message
}

/** Create or update a file in the connected repository. */
export async function putFile({ path, content, message }: PutFileOptions): Promise<void> {
  let sha: string | undefined;

  const existing = await api(path);
  if (existing.ok) {
    const json = (await existing.json()) as { sha?: string };
    sha = json.sha;
  }

  const base64 =
    typeof content === "string"
      ? Buffer.from(content, "utf8").toString("base64")
      : content.toString("base64");

  const res = await api(path, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: base64,
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });

  if (!res.ok) {
    throw new Error(`GitHub API error (${res.status}): ${await res.text()}`);
  }
}
