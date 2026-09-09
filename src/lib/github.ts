import { LANG_COLORS } from "@/data/languages";

const USERNAME = "Kaanreal";

export async function fetchRepos(limit: number) {
  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`);
    const data = await res.json();
    if (Array.isArray(data)) {
      return data
        .filter((r: any) => !r.fork && r.name.toLowerCase() !== "kaanreal")
        .slice(0, limit)
        .map((r: any) => ({ ...r, langColor: LANG_COLORS[r.language] || "#8b8b8b" }));
    }
  } catch (e) {
    console.error("Failed to fetch repos:", e);
  }
  return [];
}
