import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../utils/api";
import MovieCard from "../components/MovieCard";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchTrendingMovies();
      setMovies(data.results || []);
    }
    loadMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-800 to-gray-900">
        <h1 className="text-4xl font-bold mb-4">🎬 MovieNest</h1>
        <p className="text-lg text-gray-300 mb-6">Find your next favorite movie</p>
        <input
          type="text"
          placeholder="🔍 Search movies..."
          className="px-4 py-2 rounded-md text-black w-72"
        />
      </div>

      {/* Trending Movies */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">🔥 Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
