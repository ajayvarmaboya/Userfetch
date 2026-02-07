import React,{useState,useEffect} from "react";
function GithubUser(){
  const[input,setInput]=useState("");
  const[submmitedid,setSubmmitedId]=useState(null);
  const[user,setUser]=useState(null);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);



useEffect(()=>{
  if(!submmitedid){
    return;
  }
  const controller=new AbortController();
  const signal=controller.signal;

  setLoading(true);
  setError(null);
  fetch(`https://jsonplaceholder.typicode.com/users/${submmitedid}`, {
      signal,
    })
    .then((res)=>{
      if(!res.ok){
        throw new Error ("user not found");
      }
      return res.json();
    })
    .then((data)=>{
      setUser(data);
      setLoading(false);
    })
    .catch((err)=>{
      if(err.name==="AbortError")return;
      setError(err.message);
      setUser(null);
      setLoading(false);
    });
    return()=>controller.abort();
},[submmitedid]);

function handelSubmit(e){
  e.preventDefault();
  if(!input){
    setError("user ID is required");
    return;
  }
  const id=Number(input);

  if(isNaN(id)||id<1||id>10){
    setError("user id must be between 1 and 10");
      return;
    }
    setError(null);
    setSubmmitedId(id);
}
return(
  <div style={{padding:"20px"}}>
    <h1> User Fetch</h1>
  

  <form onSubmit={handelSubmit}>
    <input
    type="text"
    placeholder="Enter user-id (1-10)"
    value={input}
    onChange={(e)=>{
      const value=e.target.value;
      setInput(value);
      if(value===""){
        setUser(null);
        setError(null);
        setSubmmitedId(null);
      }
    }}
    style={{padding:"8px",marginBottom:"10px"}}
    />
    <button type="submit" disabled={!input||loading} style={{marginLeft:"10px"}}>
      Search
    </button>
  </form>
  {loading && <p>Loading...</p>}
  {!loading && error &&(
    <p style={{color:"red"}}>Error:{error}</p>
  )}
    {user &&(
      <div>
        <p><strong>Name:</strong>{user.name}</p>
        <p><strong>Email:</strong>{user.email}</p>
        <p><strong>Company:</strong>{user.company.name}</p>
      </div>
    )}
  </div>

);
}
export default GithubUser;
