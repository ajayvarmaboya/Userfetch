import GithubUser from "./GithubUser";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./index.css";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      
      {/* Theme Toggle Button */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>

      {/* Search UI */}
      <GithubUser />

    </div>
  );
}

export default App;