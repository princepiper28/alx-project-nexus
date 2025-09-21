import Link from "next/link";
import Image from "next/image";
import { useFavorites } from "../contexts/FavoritesContext";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden relative">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="w-full h-auto object-cover"
        />
      </Link>
      <div className="p-3 flex justify-between items-center">
        <h3 className="text-sm font-bold truncate">{movie.title}</h3>
        <span className="text-yellow-400 text-xs">⭐ {movie.vote_average}</span>
      </div>
      <button
        onClick={() =>
          isFavorite(movie.id) ? removeFavorite(movie.id) : addFavorite(movie)
        }
        className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs ${
          isFavorite(movie.id) ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {isFavorite(movie.id) ? "Remove" : "Fav"}
      </button>
    </div>
  );
}
