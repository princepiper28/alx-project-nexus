import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-red-400 transition"
        >
          🎬 MovieNest
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-red-400 transition">
            Home
          </Link>
          <Link href="/search" className="hover:text-red-400 transition">
            Search
          </Link>
          <Link href="/favorites" className="hover:text-red-400 transition">
            Favorites
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-red-400 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-3 flex flex-col gap-3 bg-gray-700 rounded-lg p-4 overflow-hidden"
          >
            <Link
              href="/"
              className="hover:text-red-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/search"
              className="hover:text-red-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Search
            </Link>
            <Link
              href="/favorites"
              className="hover:text-red-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Favorites
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
