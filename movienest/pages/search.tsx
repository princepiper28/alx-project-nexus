import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../lib/tmdb";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const data = await searchMovies(query);
      setResults(data.results || []);
    } catch (err) {
      console.error("Error searching movies:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🔍 Search Movies</h1>

      {/* Search Bar */}
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
        <p className="text-center text-gray-400">
          No results found 😢
        </p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {results.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={{
              id: movie.id,
              title: movie.title,
              poster_path: movie.poster_path,
              vote_average: movie.vote_average,
            }}
          />
        ))}
      </div>
    </div>
  );
}

