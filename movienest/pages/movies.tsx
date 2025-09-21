import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";

const movies = [
  { id: 1, title: "Inception", poster: "/posters/inception.jpg" },
  { id: 2, title: "Interstellar", poster: "/posters/interstellar.jpg" },
  { id: 3, title: "The Dark Knight", poster: "/posters/darkknight.jpg" },
];

export default function MoviesPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Layout>
  );
}
