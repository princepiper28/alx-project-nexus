import { useEffect, useState } from "react";
import {
  fetchTrendingMovies,
   fetchRecommendedMovies,
   searchMovies,
} from "../lib/tmdb";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export default function HomePage() {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [recommended, setRecommended] = useState<Movie[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function loadMovies() {
      const trendingData = await fetchTrendingMovies();
      setTrending(trendingData.results || []);

      const recommendedData = await fetchRecommendedMovies();
      setRecommended(recommendedData.results || []);
    }
    loadMovies();
  }, []);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    const results = await searchMovies(query);
    setSearchResults(results.results || []);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original/9ZlGiEKC5O1d0z6slGX2JcYyJxR.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">🎬 MovieNest</h1>
          <p className="text-lg text-gray-300 mb-6">
            Find your next favorite movie
          </p>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="🔍 Search movies..."
              className="px-4 py-2 rounded-md text-black w-72"
            />
          </form>
        </div>
      </div>

      {/* Show Search Results if query is active */}
      {searchResults.length > 0 && (
        <section className="px-6 py-10">
          <h2 className="text-2xl font-semibold mb-6">
            🔍 Search Results for "{query}"
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      )}

      {/* Trending Movies (hide if searching) */}
      {searchResults.length === 0 && (
        <>
          <section className="px-6 py-10">
            <h2 className="text-2xl font-semibold mb-6">🔥 Trending Now</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {trending.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* Recommended For You */}
          <section className="px-6 py-10 bg-gray-800">
            <h2 className="text-2xl font-semibold mb-6">✨ Recommended For You</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {recommended.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}
