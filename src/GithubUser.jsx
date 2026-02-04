import React,{useState,useEffect} from "react";
function GithubUser(){
    const[searchUser,setSearchUser]=useState("")
    const[userName,setUserName]=useState("");
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);
    useEffect(()=>{
      if(!userName){
        setUser(null);
        setError(null);
      }
    },[userName])
    useEffect(()=>{
      const timeout=setTimeout(()=>{
        setSearchUser(userName);
      },500);
      return()=>{
        clearTimeout(timeout);
      }
    },[userName]);

    useEffect(()=>{

        if(!searchUser)return;
        const controller=new AbortController();
        const signal=controller.signal;
        setLoading(true);
        setError(null);
        console.log("Fetching user:", searchUser);
        fetch(`https://jsonplaceholder.typicode.com/users/${searchUser}`, {
  signal
})
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
            if(err.name ==="AbortError")return;
            setError(err.message);
            setUser(null);
            setLoading(false);
        });
      return()=>{
        controller.abort();
      }
    },[searchUser]);
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
      

      {!loading && error &&(
        <p style={{ color:"red"}}>
          Error:{error}
        </p>
      )}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <img src={user.avatar_url} alt="avatar" width="120" />
          <p>{user.bio}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      )}
    </div>
  );
}

export default GithubUser;

