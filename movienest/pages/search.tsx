import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../utils/api";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    const data = await searchMovies(query);
    setResults(data.results || []);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🔍 Search Movies</h1>

      {/* Search bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center mb-8"
      >
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 rounded-l-md w-64 md:w-96 text-black"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md"
        >
          Search
        </button>
      </form>

      {/* Results */}
      {loading && <p className="text-center">Loading...</p>}
      {!loading && results.length === 0 && query && (
        <p className="text-center text-gray-400">No results found 😢</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {results.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={{
              id: movie.id,
              title: movie.title,
              poster: movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/placeholder.png",
            }}
          />
        ))}
      </div>
    </div>
  );
}
