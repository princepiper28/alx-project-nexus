import type { AppProps } from "next/app";
import { FavoritesProvider } from "../contexts/FavoritesContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoritesProvider>
      <Component {...pageProps} />
    </FavoritesProvider>
  );
}
