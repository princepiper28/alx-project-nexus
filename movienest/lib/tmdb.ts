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

// Fetch trending movies
export async function fetchTrendingMovies() {
  return fetchMovies("/trending/movie/week");
}

// Fetch movie details by ID
export async function fetchMovieDetails(id: string) {
  return fetchMovies(`/movie/${id}`);
}

// ✅ Correct search function
export async function searchMovies(query: string) {
  const res = await fetch(
    `${API_BASE}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Failed to search movies");
  return res.json();
}
