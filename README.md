# 🔍 GitHub User Explorer

A minimalist React application that allows users to search GitHub profiles in real time with a clean Google-style interface and global theme management.

🌐 **Live Demo:** https://ajayvarmaboya.github.io/GithubUserExplorer/  
⚛️ **Built With:** React (Vite), GitHub API, Context API  
🚀 **Deployed On:** GitHub Pages  

---

## ✨ Features

### 🔎 Real-Time GitHub Search
- Debounced API requests (500ms)
- Prevents unnecessary fetch calls
- Proper loading & error handling
- Fetch cancellation using cleanup
- Instant result rendering

### 🌗 Global Theme System
- Implemented using **React Context API**
- Dark / Light toggle
- State shared globally without prop drilling
- Theme persists using `localStorage`
- Clean separation between state and UI representation

### 🎨 Minimal UI Design
- Full-screen background image
- Centered Google-style search bar
- Floating theme toggle (fixed corner)
- Smooth focus animation
- Fully responsive layout

---

## 🧠 Concepts Demonstrated

This project showcases:

<<<<<<< HEAD
- `useState`, `useEffect`, `useContext`, `useRef`
- Context API for global state management
- Debouncing user input
- Conditional rendering
- Side-effect cleanup
- Responsive design
- Clean component architecture
- Static site deployment (GitHub Pages)
=======
---

## 📸 UI Preview

> The app uses a full-screen background image with a floating card that blends seamlessly into the background.  
> Only the background **inside the card** is blurred — the page background remains sharp.


>>>>>>> d79fef7ec3b277c9f140bb4cba39a4d0186935a1

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **State Management:** Context API
- **API:** GitHub REST API
- **Styling:** Vanilla CSS
- **Deployment:** GitHub Pages

---

## 📁 Project Structure

src/
├── context/
│ └── ThemeContext.jsx
├── GithubUser.jsx
├── App.jsx
├── main.jsx
└── index.css
public/
└── Github Cat.jpeg

## 🚀 Getting Started Locally

### 1️⃣ Clone the repository

```bash
<<<<<<< HEAD
git clone https://github.com/ajayvarmaboya/GithubUserExplorer.git
cd GithubUserExplorer

2️⃣ Install dependencies
npm install

3️⃣ Run development server
npm run dev

🌍 Deployment (GitHub Pages)
Build & Deploy
npm run build
npm run deploy


Make sure your vite.config.js includes:

export default defineConfig({
  base: "/github-explorer/",
});
=======
git clone https://github.com/ajayvarmaboya/Userfetch.git
cd Userfetch
>>>>>>> d79fef7ec3b277c9f140bb4cba39a4d0186935a1
