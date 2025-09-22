import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../lib/tmdb";
import { useFavorites } from "../../contexts/FavoritesContext";

type MovieDetail = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  poster_path: string;
};

export default function MovieDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();

  useEffect(() => {
    if (!id) return;
    async function loadMovie() {
      const data = await fetchMovieDetails(id as string);
      setMovie(data);
    }
    loadMovie();
  }, [id]);

  if (!movie) return <p className="text-center text-white">Loading...</p>;

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg shadow-lg w-full md:w-1/3"
        />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-400 mb-2">
            📅 {movie.release_date} | ⭐ {movie.vote_average.toFixed(1)}
          </p>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Favorites button */}
          <button
            onClick={() =>
              isFavorite ? removeFromFavorites(movie.id) : addToFavorites(movie)
            }
            className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600 transition"
          >
            {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
          </button>

          {/* Synopsis */}
          <h2 className="text-xl font-semibold mt-6 mb-2">Synopsis</h2>
          <p className="text-gray-300">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
