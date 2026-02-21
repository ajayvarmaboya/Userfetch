import { useState } from "react";
import GithubUser from "./GithubUser";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  return (
    <div className={`app ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <div className="app-card">
        <GithubUser />
      </div>
    </div>
  );
}

export default App;