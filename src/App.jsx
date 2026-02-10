
import GithubUser from "./GithubUser";
import "./index.css";

function App() {
  return (
    <div className="hero">
      <div className="app-card">
        {/* blurred background inside card */}
        <div className="card-bg" />

        {/* sharp content */}
        <div className="card-content">
          <GithubUser />
        </div>
      </div>
    </div>
  );
}

export default App;
  

  

    
  