export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-10 border-t border-gray-700">
      <p>
        © {new Date().getFullYear()} MovieNest 🎬 | Built with Next.js & TailwindCSS
      </p>
    </footer>
  );
}