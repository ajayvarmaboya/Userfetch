import React,{useState,useEffect} from "react";
function GithubUser(){
  const[input,setInput]=useState("");
  const[debouncedInput,setDebouncedInput]=useState("");
  const[user,setUser]=useState(null);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);

useEffect(()=>{
  const timer=setTimeout(()=>{
    setDebouncedInput(input);
  },500);
  return()=> clearTimeout(timer);
},[input]);


useEffect(()=>{
  if(!debouncedInput){
    setUser(null);
    setError(null);
    return;
  }
  const controller=new AbortController();
  const signal=controller.signal;

  setLoading(true);
  setError(null);
  fetch(`https://jsonplaceholder.typicode.com/users/${debouncedInput}`, {
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


},[debouncedInput]);
return(
  <div style={{padding:"20px"}}>
    <h1> User Fetch</h1>
  

  <input 
    type="text"
    placeholder="Enter the user is(1-10)"
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    style={{padding:"8px",marginBottom:"10px"}}
    />
    {loading &&<p>Loading...</p>}
    {!loading && error &&(
      <p style ={{color:"red"}}>Error:{error}</p>
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
