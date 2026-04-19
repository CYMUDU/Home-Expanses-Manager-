# Home Expenses Manager

A React-based web app to track household and per-person expenses, split spending with family members, and visualise monthly trends.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes bundled with Node.js)

---

## Getting started

```bash
# 1. Clone the repository
git clone https://github.com/CYMUDU/Home-Expanses-Manager-.git
cd Home-Expanses-Manager-

# 2. Enter the React app directory
cd react-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open the URL shown in the terminal (usually **http://localhost:5173**) in your browser.

---

## After merging or pulling new changes

Whenever you merge a pull request on GitHub **or** run `git pull` locally, follow these steps so the latest UI changes appear:

```bash
# From the root of the repository:

# 1. Pull the latest code from GitHub
git pull

# 2. Enter the React app directory
cd react-app

# 3. Re-install dependencies (picks up any new packages)
npm install

# 4. Restart the development server
npm run dev
```

Then **hard-refresh** your browser (Ctrl + Shift + R on Windows/Linux, Cmd + Shift + R on macOS) to clear any cached assets.

---

## Why UI changes may not appear after a pull

| Cause | Fix |
|---|---|
| You haven't pulled the latest code | Run `git pull` in the repository root |
| `node_modules` is out of date | Run `npm install` inside `react-app/` |
| The dev server is still running old code | Stop it (Ctrl + C) and run `npm run dev` again |
| Browser is serving a cached version | Hard-refresh: Ctrl + Shift + R / Cmd + Shift + R |
| Vite's hot-reload missed a file change | Stop and restart `npm run dev` |
| You are in the wrong directory | Make sure you run `npm` commands inside `react-app/`, not the repository root |

---

## Available scripts

Run these from inside the `react-app/` directory:

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server with hot reload |
| `npm run build` | Create a production build in `react-app/dist/` |
| `npm run preview` | Preview the production build locally |

---

## Project structure

```
Home-Expanses-Manager-/
├── react-app/          ← React + Vite application (work here)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   └── utils/
│   ├── package.json
│   └── vite.config.js
├── index.html          ← Legacy static page (not used by the React app)
└── README.md
```
