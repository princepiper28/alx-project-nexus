import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow">
      <Link href="/" className="text-2xl font-bold">
        🎬 MovieNest
      </Link>
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/search" className="hover:text-blue-400">Search</Link>
        <Link href="/favorites" className="hover:text-blue-400">Favorites</Link>
      </div>
    </nav>
  );
}
