import Link from "next/link";
import Image from "next/image";
import { useFavorites } from "../contexts/FavoritesContext";
import { Movie } from "../types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden relative">
      {/* Movie Poster */}
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="w-full h-auto object-cover"
          priority
        />
      </Link>

      {/* Title + Rating */}
      <div className="p-3 flex justify-between items-center">
        <h3 className="text-sm font-bold truncate">{movie.title}</h3>
        {movie.vote_average !== undefined && (
          <span className="text-yellow-400 text-xs">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={() =>
          isFavorite(movie.id)
            ? removeFromFavorites(movie.id)
            : addToFavorites(movie)
        }
        className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs transition-colors ${
          isFavorite(movie.id) ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {isFavorite(movie.id) ? "Remove" : "Fav"}
      </button>
    </div>
  );
}
