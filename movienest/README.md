# 🎬 MovieNest – Your Cozy Hub for Films

**Live Demo:** [https://movienest-git-main-prince-udoewah-s-projects.vercel.app/](https://movienest-git-main-prince-udoewah-s-projects.vercel.app/)

MovieNest is a **Movie Recommendation Web App** built with **Next.js, TypeScript, and TailwindCSS**.  
It allows users to **browse trending movies**, explore **detailed movie pages**, **search titles**, and **save favorites** — all in one place.  

🚀 Designed for **speed, scalability, and a seamless user experience**.

---

## ✨ Features

- **Trending Movies Dashboard**  
  Browse trending movies fetched from TMDb API with posters, ratings, and genres.

- **Dynamic Movie Pages**  
  Each movie has a dedicated detail page with title, description, cast, release date, and more.

- **Search Functionality**  
  Search movies by title and explore results dynamically.

- **Favorites List**  
  Save/remove movies to your **Favorites list**, persisted in localStorage.

- **Responsive & Interactive UI**  
  Mobile-first, Tailwind-powered design with smooth animations and hover effects.

- **Custom 404 Page**  
  Friendly “Not Found” page for broken or missing routes.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) – React framework for SSR & routing  
- [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript  
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework  
- [TMDb API](https://developer.themoviedb.org/) – Movie database & API  
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) – Store favorites locally  

---

## 📂 Project Structure

movienest/
│── pages/
│ ├── index.tsx # Home page (Trending movies)
│ ├── movie/[id].tsx # Dynamic movie detail page
│ ├── favorites.tsx # Favorites page
│ ├── search.tsx # Search page
│ ├── 404.tsx # Custom 404 page
│
│── components/
│ ├── MovieCard.tsx # Reusable movie card
│ ├── Navbar.tsx # Top navigation
│ ├── Footer.tsx # Footer section
│
│── styles/
│ ├── globals.css # Global Tailwind styles
│
│── public/ # Static assets (icons, images)
│── tailwind.config.ts # Tailwind configuration
│── postcss.config.js # PostCSS configuration
│── tsconfig.json # TypeScript configuration
│── package.json # Dependencies & scripts
│── README.md # Project documentation



---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

git clone https://github.com/princepiper28/movienest.git
cd movienest
2️⃣ Install Dependencies

npm install
3️⃣ Run the Development Server


npm run dev
Visit 👉 http://localhost:3000

🔑 API Setup
This app uses the TMDb API for movie data:

Sign up on TMDb

Generate a free API key from the developer dashboard
Create a .env.local file in your project root:


NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
Restart the dev server.

📦 Git Commit Workflow
We follow conventional commits for clarity and professionalism:

feat: → New feature (e.g., feat: add favorites functionality)
fix: → Bug fix
style: → UI/styling changes
docs: → Documentation updates
refactor: → Code restructuring (no new features or fixes)
chore: → Maintenance tasks

🌍 Deployment
Deploy easily on Vercel (recommended for Next.js apps):

npm run build
npm run start
Live Demo:
👉 https://movienest-git-main-prince-udoewah-s-projects.vercel.app/

📊 Evaluation Criteria
✔️ Functionality – Trending movies, search, favorites, dynamic routing
✔️ Code Quality – Clean TypeScript, reusable components, Tailwind best practices
✔️ User Experience – Responsive, accessible, intuitive design
✔️ Version Control – Regular commits with meaningful messages
✔️ Deployment – Live demo hosted on Vercel

👨‍💻 Author
Prince Joseph Udoewah
Frontend Developer – Next.js | React | TypeScript | TailwindCSS
📍 Nigeria | 🌐 Passionate about building user-focused applications

📜 License
Licensed under the MIT License.
Feel free to use, adapt, and share!