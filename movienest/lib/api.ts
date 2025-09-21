const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

// 🔥 Fetch trending movies
export async function fetchTrendingMovies() {
  const res = await fetch(`${API_URL}/trending/movie/day?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return res.json();
}

// 🔥 Fetch movie details with credits + videos
export async function fetchMovieDetails(id: string) {
  const res = await fetch(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`
  );
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
}

// 🔥 Search movies
export async function searchMovies(query: string, page: number = 1) {
  const res = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  if (!res.ok) throw new Error("Failed to search movies");
  return res.json();
}
