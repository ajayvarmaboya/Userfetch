import React,{useState,useEffect} from "react";
function GithubUser(){
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);

    useEffect(()=>{
        setLoading(true);
        setError(null);
        fetch("https://api.github.com/users/octocat")
        .then((res)=>{
            if(!res.ok){
                throw new Error("failed to fetch user")
            }
            return res.json();
        })
        .then((data)=>{
            setUser(data);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false);
        });
    },[]);
    return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {user && (
        <div>
          <h2>{user.name}</h2>
          <img src={user.avatar_url} alt="avatar" width="120" />
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
}

export default GithubUser;

