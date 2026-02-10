# 🔍 GitHub UserFetch

A modern, interactive React application to search GitHub users in real time with smooth animations, debounced API calls, and a polished UI.

👉 **Live Demo:** https://ajayvarmaboya.github.io/Userfetch/
👉 **Tech Stack:** React · Vite · GitHub API · CSS

---

## ✨ Features

- 🔎 **Real-time GitHub user search**
- ⏱️ **Debounced API calls** (500ms) to prevent unnecessary requests
- 🧠 **No duplicate fetches** for the same username
- ❌ Graceful handling of loading & error states
- 🎨 **Advanced UI/UX**
  - Full-screen background
  - Floating app card
  - Blurred background inside the card (no glassmorphism)
  - Smooth hover & floating animations
- 📱 **Fully responsive** (mobile & desktop)
- ♿ Respects `prefers-reduced-motion`

---

## 🧠 How It Works (Concepts Used)

- **React Hooks**
  - `useState` for UI state
  - `useEffect` for side effects (API calls)
  - `useRef` for:
    - debouncing
    - caching last fetched username
- **AbortController**
  - Cancels stale API requests during fast typing
- **CSS Techniques**
  - Layered backgrounds
  - Image cloning for blur effects
  - Floating animations
  - Clean separation of layout and logic

---

## 📸 UI Preview

> The app uses a full-screen background image with a floating card that blends seamlessly into the background.  
> Only the background **inside the card** is blurred — the page background remains sharp.

*(Add screenshots here if you want later)*

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Vanilla CSS (no UI libraries)
- **API:** GitHub REST API
- **Deployment:** Github pages

---

## 🚀 Getting Started Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ajayvarmaboya/Userfetch.git
cd Userfetch