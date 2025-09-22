const API_BASE = "https://api.themoviedb.org/3";

// Generic fetch function
export async function fetchMovies(endpoint: string) {
  const res = await fetch(
    `${API_BASE}${endpoint}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  return res.json();
}

// 🔥 Trending movies
export async function fetchTrendingMovies() {
  return fetchMovies("/trending/movie/week");
}

// 🎬 Movie details
export async function fetchMovieDetails(id: string) {
  return fetchMovies(`/movie/${id}`);
}

// 🔍 Search movies
export async function searchMovies(query: string) {
  if (!query) return { results: [] };
  const res = await fetch(
    `${API_BASE}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  if (!res.ok) throw new Error("Failed to search movies");
  return res.json();
}

// ✨ Recommended (Top Rated)
export async function fetchRecommendedMovies() {
  return fetchMovies("/movie/top_rated");
}
