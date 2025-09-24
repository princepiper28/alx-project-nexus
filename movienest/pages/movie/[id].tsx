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

type CastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};

type Video = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
};

export default function MovieDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [trailer, setTrailer] = useState<string | null>(null);

  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    if (!id) return;

    async function loadMovie() {
      try {
        const data = await fetchMovieDetails(id as string);
        setMovie(data);

        // ✅ Fetch cast
        const creditsRes = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        const creditsData = await creditsRes.json();
        setCast(creditsData.cast?.slice(0, 4) || []);

        // ✅ Fetch trailer (YouTube key)
        const videosRes = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        const videosData = await videosRes.json();

        const trailerVideo = videosData.results?.find(
          (vid: Video) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        setTrailer(trailerVideo ? trailerVideo.key : null);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    }

    loadMovie();
  }, [id]);

  if (!movie) {
    return <p className="text-center text-white">Loading...</p>;
  }

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 relative">
      {/* ✅ Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md"
      >
        Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg shadow-lg w-full md:w-1/3"
        />

        {/* Info */}
        <div className="flex-1">
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
              isFavorite
                ? removeFromFavorites(movie.id)
                : addToFavorites({
                    id: movie.id,
                    title: movie.title,
                    poster_path: movie.poster_path,
                    vote_average: movie.vote_average,
                  })
            }
            className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600 transition"
          >
            {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
          </button>

          {/* Synopsis */}
          <h2 className="text-xl font-semibold mt-6 mb-2">Synopsis</h2>
          <p className="text-gray-300 mb-6">{movie.overview}</p>

          {/* ✅ Cast */}
          <h2 className="text-xl font-semibold mb-2">Top Cast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {cast.map((actor) => (
              <div
                key={actor.id}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : "/default-avatar.png"
                  }
                  alt={actor.name}
                  className="w-24 h-24 object-cover rounded-full mb-2"
                />
                <p className="font-medium">{actor.name}</p>
                <p className="text-sm text-gray-400">{actor.character}</p>
              </div>
            ))}
          </div>

          {/* ✅ Trailer */}
          {trailer && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">🎬 Watch Trailer</h2>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${trailer}`}
                  title="Movie Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
