export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} 🎬 MovieNest. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition"
          >
            Powered by TMDb
          </a>
          <a
            href="#"
            className="hover:text-red-400 transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-red-400 transition"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
