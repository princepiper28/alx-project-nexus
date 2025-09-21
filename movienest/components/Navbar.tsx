import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-red-400 transition">
          🎬 MovieNest
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-red-400 transition">Home</Link>
          <Link href="/search" className="hover:text-red-400 transition">Search</Link>
          <Link href="/favorites" className="hover:text-red-400 transition">Favorites</Link>
        </div>

        {/* Mobile Menu Icon (for later if you want dropdown) */}
        <button className="md:hidden text-gray-300 hover:text-red-400">
          ☰
        </button>
      </div>
    </nav>
  );
}