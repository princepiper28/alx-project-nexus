import { useFavorites } from "../contexts/FavoritesContext";
import MovieCard from "../components/MovieCard";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">❤️ Your Favorites</h1>

      {favorites.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-lg text-gray-400">
            No favorites yet. Start exploring 🎬
          </p>
          <div className="text-6xl mt-6">🍿</div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <div key={movie.id} className="relative group">
              <MovieCard movie={movie} />
              {/* Remove Button */}
              <button
                onClick={() => removeFromFavorites(movie.id)}
                className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full text-sm opacity-80 hover:opacity-100"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
