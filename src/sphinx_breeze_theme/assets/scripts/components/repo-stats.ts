import { defineComponent } from "../utils/component";

interface RepoStats {
  stars: number;
  forks: number;
}

const CACHE_DURATION = 3600000; // 1 hour

defineComponent(".bz-repo-stats", (el) => {
  const link = el.querySelector("a");
  if (link) {
    loadRepoStats(link);
  }
});

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (num >= 10000) return Math.round(num / 1000) + 'k';
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  return num.toString();
}

async function fetchGitHubStats(user: string, repo: string): Promise<RepoStats> {
  const response = await fetch(`https://api.github.com/repos/${user}/${repo}`);
  const data = await response.json();

  return {
    stars: data.stargazers_count,
    forks: data.forks_count,
  };
}

async function fetchGitLabStats(user: string, repo: string): Promise<RepoStats> {
  const projectPath = encodeURIComponent(`${user}/${repo}`);
  const response = await fetch(`https://gitlab.com/api/v4/projects/${projectPath}`);
  const data = await response.json();

  return {
    stars: data.star_count,
    forks: data.forks_count,
  };
}

function getCachedStats(key: string): RepoStats | null {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  const { data, timestamp } = JSON.parse(cached);
  if (Date.now() - timestamp > CACHE_DURATION) {
    localStorage.removeItem(key);
    return null;
  }

  return data;
}

function setCachedStats(key: string, stats: RepoStats): void {
  localStorage.setItem(key, JSON.stringify({
    data: stats,
    timestamp: Date.now(),
  }));
}

async function loadRepoStats(el: HTMLElement) {
  const provider = el.dataset.provider;
  const user = el.dataset.user;
  const repo = el.dataset.repo;

  if (!provider || !user || !repo) {
    console.warn("Missing provider, user, or repo data for repo stats");
    return;
  }

  if (provider !== "github" && provider !== "gitlab") {
    console.warn(`Unsupported provider: ${provider}`);
    return;
  }

  const cacheKey = `bz-repo-stats:${provider}:${user}/${repo}`;
  const starsEl = el.querySelector('[data-stat="stars"]');
  const forksEl = el.querySelector('[data-stat="forks"]');

  if (!starsEl || !forksEl) return;

  const cached = getCachedStats(cacheKey);
  if (cached) {
    starsEl.textContent = formatNumber(cached.stars);
    forksEl.textContent = formatNumber(cached.forks);
    return;
  }

  try {
    const stats = provider === "github"
      ? await fetchGitHubStats(user, repo)
      : await fetchGitLabStats(user, repo);

    starsEl.textContent = formatNumber(stats.stars);
    forksEl.textContent = formatNumber(stats.forks);
    setCachedStats(cacheKey, stats);
  } catch (error) {
    console.error("Failed to load repo stats:", error);
  }
}
