# React Starter

A starter that’s actually a starter. React 19 + Vite, wired with ESLint and Prettier, and a clean structure built to scale. 

---

## Features

- Vite for fast dev server and builds  
- React 19 with Hooks  
- ESLint 9 (with React, Hooks, Import, and Prettier plugins)  
- Prettier 3 for consistent formatting  
- Alias `@` → `src/` for cleaner imports  
- Update script for keeping dependencies fresh  

---

## Getting Started

1. Clone the repo  
   ```bash
   git clone https://github.com/CharlsCabangon/react-starter.git react-starter
   cd react-starter
   npm install
   ```

2. Start dev server  
   ```bash
   npm run dev
   ```
   Runs on [http://localhost:5173](http://localhost:5173)

3. Build for production  
   ```bash
   npm run build
   ```

4. Preview build  
   ```bash
   npm run preview
   ```

---

## Scripts Overview

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `npm run dev`      | Start dev server                   |
| `npm run build`    | Build for production               |
| `npm run preview`  | Preview production build           |
| `npm run lint`     | Check code with ESLint             |
| `npm run lint:fix` | Fix lint issues automatically      |
| `npm run format`   | Format code with Prettier          |
| `npm run update:deps` | Update dependencies to latest   |

---

## Roadmap / Improvements

- Add testing setup (Vitest or Jest)  
- Add Husky + lint-staged for pre-commit checks  
- Add CI workflow for linting and builds  

---