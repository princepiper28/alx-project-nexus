import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
  const [trending, setTrending] = useState<Movie[]>([]);
  const router = useRouter();

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

  // Fetch trending/popular movies for flowing cards
  useEffect(() => {
    async function fetchTrending() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        const data = await res.json();
        setTrending(data.results || []);
      } catch (err) {
        console.error("Error fetching trending movies:", err);
      }
    }
    fetchTrending();
  }, []);

  return (
  <div className="min-h-screen bg-gray-900 text-white p-6 relative">
    <h1 className="text-3xl font-bold mb-6 text-center">🔍 Search Movies</h1>

    {/* Back Button */}
    <button
      onClick={() => router.push("/")}
      className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md"
    >
      Back
    </button>

    {/* 🎬 Trending Section */}
    {trending.length > 0 && results.length === 0 && (
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          🔥 Trending Now
        </h2>
        <div className="overflow-hidden whitespace-nowrap">
          <div
            className="
              inline-flex
              animate-marquee-fast      /* fast for mobile */
              sm:animate-marquee        /* normal for tablets */
              lg:animate-marquee-slow   /* slower for desktops */
              hover:[animation-play-state:paused] /* ✅ pause on hover */
            "
          >
            {trending
              .slice(0, 15)
              .concat(trending.slice(0, 15))
              .map((movie, i) => (
                <div key={`${movie.id}-${i}`} className="mx-2 w-40 flex-shrink-0">
                  <MovieCard movie={movie} />
                </div>
              ))}
          </div>
        </div>
      </section>
    )}

    {/* Search Bar (moved below Trending) */}
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
