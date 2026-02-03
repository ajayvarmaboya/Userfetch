import React,{useState,useEffect} from "react";
function GithubUser(){
    const[userName,setUserName]=useState("octocat");
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);

    useEffect(()=>{
        if(!userName)return;
        setLoading(true);
        setError(null);
        fetch("https://api.github.com/users/${userName}")
        .then((res)=>{
            if(!res.ok){
                throw new Error("user not found")
            }
            return res.json();
        })
        .then((data)=>{
            setUser(data);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setUser(null);
            setLoading(false);
        });
    },[userName]);
    return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User</h1>
      <input
        type="text"
        placeholder="Enter Github username"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        style={{padding:"8px",marginBottom:"10px"}}
      
      
      />

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

