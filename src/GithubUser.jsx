import React, { useState, useEffect, useRef } from "react";

function GithubUser() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const lastFetchedUsername = useRef(null);
  const debounceTimer = useRef(null);

  useEffect(() => {
    if (!input || input.length < 3) {
      setUser(null);
      setError(null);
      setLoading(false);
      lastFetchedUsername.current = null;
      return;
    }

    if (lastFetchedUsername.current === input) return;

    clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      const controller = new AbortController();

      async function fetchUser() {
        try {
          setLoading(true);
          setError(null);

          const res = await fetch(
            `https://api.github.com/users/${input}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("User not found");

          const data = await res.json();
          setUser(data);
          lastFetchedUsername.current = input;
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
            setUser(null);
          }
        } finally {
          setLoading(false);
        }
      }

      fetchUser();
      return () => controller.abort();
    }, 500);

    return () => clearTimeout(debounceTimer.current);
  }, [input]);

  return (
    <div className="app">
      <div className="card">
        <h1>GitHub Explorer</h1>
        <p className="subtitle">Search GitHub users in real time</p>

        <input
          className="input"
          placeholder="Type a GitHub username…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {input && input.length < 3 && (
          <p className="hint">Type at least 3 characters</p>
        )}

        {loading && <div className="loader"></div>}

        {error && <p className="error">{error}</p>}

        {user && (
          <div className="profile">
            <img src={user.avatar_url} alt="" />
            <h3>{user.login}</h3>
            <p>{user.bio || "No bio available"}</p>

            <div className="stats">
              <span>👥 {user.followers}</span>
              <span>⭐ {user.public_repos}</span>
            </div>

            <a href={user.html_url} target="_blank" rel="noreferrer">
              View Profile →
            </a>
          </div>
        )}
      </div>

      
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Inter, sans-serif;
        }

        .app {
          min-height:100vh;
          padding:20px;
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .card {
          width: 100%;
          max-width: 420px;
          padding: 24px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        h1 {
          margin: 0;
        }

        .subtitle {
          font-size: 14px;
          opacity: 0.85;
          margin-bottom: 16px;
        }

        .input {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: none;
          outline: none;
          font-size: 16px;
          margin-bottom: 8px;
        }

        .input:focus {
          box-shadow: 0 0 0 2px rgba(255,255,255,0.6);
        }

        .hint {
          font-size: 12px;
          opacity: 0.8;
        }

        .loader {
          margin: 20px auto;
          width: 36px;
          height: 36px;
          border: 3px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .error {
          color: #ffd1d1;
          animation: shake 0.3s;
        }

        .profile {
          margin-top: 20px;
          animation: slideUp 0.4s ease;
        }

        .profile img {
          width: 96px;
          border-radius: 50%;
          border: 3px solid white;
        }

        .profile h3 {
          margin: 10px 0 4px;
        }

        .stats {
          display: flex;
          justify-content: space-around;
          margin: 10px 0;
          font-size: 14px;
        }

        .profile a {
          display: inline-block;
          margin-top: 10px;
          text-decoration: none;
          color: #fff;
          font-weight: bold;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-4px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default GithubUser;
