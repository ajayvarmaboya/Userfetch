# 🔍 GitHub User Explorer

A modern React application that allows users to search GitHub profiles in real time with a clean centered UI, dynamic theme switching, and optimized API handling.

🌐 **Live Demo:**  
https://ajayvarmaboya.github.io/GithubUserExplorer/

⚛️ **Built With:** React (Vite), GitHub API  
🎨 **Styling:** Vanilla CSS  
🚀 **Deployed On:** GitHub Pages  

---

## ✨ Features

### 🔎 Real-Time GitHub Search
- Debounced API requests (500ms)
- Prevents unnecessary fetch calls
- Handles loading & error states
- Clean result rendering
- Clickable profile link

### 🌗 Light / Dark Theme
- Toggle between light and dark modes
- Theme-aware search bar styling
- Theme-aware error colors
- Theme-aware caret color (fixes invisible cursor in dark mode)
- Smooth UI transitions

### 🎨 UI Design
- Full-screen responsive background image
- Centered floating app card
- Google-style search bar
- Smooth focus animation
- Modern shadow effects
- Fully responsive layout

---

## 🧠 Concepts Demonstrated

This project showcases:

- `useState`
- `useEffect`
- `useRef`
- Debouncing user input
- Conditional rendering
- Controlled components
- Theme-based styling using CSS classes
- Caret color management
- Clean layout architecture
- Static site deployment (GitHub Pages)

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **API:** GitHub REST API
- **State Management:** Local component state
- **Styling:** Vanilla CSS
- **Deployment:** GitHub Pages

---

## 📁 Project Structure
src/
├── GithubUser.jsx
├── App.jsx
├── main.jsx
└── index.css

public/
└── GithubCat.jpeg


---

## 🚀 Getting Started Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ajayvarmaboya/GithubUserExplorer.git
cd GithubUserExplorer

npm install
npm run dev