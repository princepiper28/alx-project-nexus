import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

type FavoritesContextType = {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: Movie) => {
    if (!favorites.find((m) => m.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((m) => m.id !== id));
  };

  const isFavorite = (id: number) => favorites.some((m) => m.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Custom hook
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used within FavoritesProvider");
  return context;
}
