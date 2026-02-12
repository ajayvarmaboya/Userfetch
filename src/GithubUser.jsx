import React, { useState, useEffect, useRef } from "react";

function GithubUser() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debounceTimer = useRef(null);

  useEffect(() => {
    if (!input || input.length < 3) {
      setUser(null);
      setError(null);
      return;
    }

    clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://api.github.com/users/${input}`
        );

        if (!res.ok) throw new Error("User not found");

        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(debounceTimer.current);
  }, [input]);

  return (
    <div className="search-container">
      <input
        className="search-bar"
        placeholder="Enter GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {loading && <p className="status">Searching...</p>}
      {error && <p className="status error">{error}</p>}

      {user && (
      <div className="result">
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="profile-link"
        >
          <img src={user.avatar_url} alt="" />
          <h3>{user.login}</h3>
        </a>

        <p>{user.bio || "No bio available"}</p>
      </div>
    )}

    </div>
  );
}

export default GithubUser;