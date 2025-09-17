# 🎬 MovieNest – Your Cozy Hub for Films

MovieNest is a **Movie Recommendation Web App** built with **Next.js, TypeScript, and TailwindCSS**.  
It allows users to browse **trending movies**, explore **detailed movie pages**, **search movies**, and **save favorites** — all in one place.  

🚀 Designed for speed, scalability, and a seamless user experience.

---

## ✨ Features

- **Trending Movies Dashboard**  
  Displays movies fetched from a public API with posters, ratings, and genres.

- **Dynamic Movie Pages**  
  Each movie has a dedicated page with details (title, description, cast, release date, etc.).

- **Search Functionality**  
  Find movies by title and browse through matching results.

- **Save Favorites**  
  Users can add/remove movies to their **Favorites list**, stored locally (localStorage).

- **Responsive & Interactive UI**  
  TailwindCSS-powered design, mobile-first, with smooth animations and hover effects.

- **404 Page**  
  Friendly "Not Found" page for broken links or unavailable movies.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) – React framework for server-side rendering & routing  
- [TypeScript](https://www.typescriptlang.org/) – Type safety and scalability  
- [TailwindCSS](https://tailwindcss.com/) – Utility-first responsive styling  
- [TMDb API](https://developer.themoviedb.org/) (or similar) – Movie data source  
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) – Save favorites locally  

---

## 📂 Project Structure

```bash
movienest/
│── pages/
│   ├── index.tsx          # Home page (Trending movies)
│   ├── movie/[id].tsx     # Movie detail page (Dynamic routing)
│   ├── favorites.tsx      # Favorites page
│   ├── search.tsx         # Search page
│   ├── 404.tsx            # Custom 404 page
│
│── components/
│   ├── MovieCard.tsx      # Reusable movie card component
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer component
│
│── styles/
│   ├── globals.css        # Tailwind base styles
│
│── public/                # Static assets (icons, images)
│── tailwind.config.ts     # TailwindCSS configuration
│── postcss.config.js      # PostCSS configuration
│── tsconfig.json          # TypeScript configuration
│── package.json           # Project metadata & dependencies
│── README.md              # Project documentation

##🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/movienest.git
cd movienest

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev


Visit 👉 http://localhost:3000
 to view the app.

##🔑 API Setup

This app uses TMDb API
.
You’ll need to create a free account and generate an API key.

Sign up at TMDb

Get your API key from the developer dashboard

Create a .env.local file in your project root:

NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here


Restart the dev server.

##📦 Git Commit Workflow

We follow conventional commits for clarity:

feat: → New feature (e.g., feat: add favorites functionality)

fix: → Bug fix

style: → UI or styling changes

docs: → Documentation updates

refactor: → Code refactoring

chore: → Maintenance tasks

##🌍 Deployment

Easily deploy on Vercel
 (recommended for Next.js apps):

npm run build
npm run start

##📊 Evaluation Criteria

Functionality – Fetches trending & recommended movies, dynamic routing, favorites system.

Code Quality – Clean TypeScript, reusable components, Tailwind best practices.

User Experience – Responsive design, smooth navigation, intuitive UI.

Version Control – Regular commits with clear messages, organized repo structure.

##📸 Screenshots (Mockups)
Home Page	Movie Detail Page

	
Favorites Page	Search Page

	
404 Page

##👨‍💻 Author

Prince Joseph Udoewah
Frontend Developer (Next.js, React, TailwindCSS, TypeScript)
📍 Nigeria | 🌐 Passionate about building user-focused applications

##📜 License

This project is licensed under the MIT License.
Feel free to use and adapt it for your own projects!