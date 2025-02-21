import { useState, useCallback } from "react";
const UseCallback=()=>{
    var [number,setNum]= useState(0);
    var [theme,setTheme]= useState(false);
  
    var styling={
        backgroundColor:theme ? "black":"white",
        color: theme ? "white":"black",
    }
    var numList=()=>{
        return [number*2,number*4,number*8];
    }
    return (
    <div style={styling}>
        <h1> this is use Callback</h1>
        Number: <input type="number" value={number} onChange={(e)=> setNum(parseInt(e.target.value))}/>
        <h1>The number is {number}</h1>
        {/* <h1>The list of number is {numList()}</h1> */}
        <h2>the list of numbers are</h2>
        {numList(1000).map((val,index)=>(
            <h2 key={index}>{val}</h2>
            ))}
     
       
       <center><button onClick={()=>setTheme(!theme)}>Change Theme</button></center>
    </div>
    )
}

export default UseCallback;