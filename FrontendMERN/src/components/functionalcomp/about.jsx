import "../css/nav.css"
import { useState } from "react";
function About() {
    var initial= 0;
    var [num,setnum]= useState(initial);
    function decrement(){
        setnum(num-1);
    }
        return (
        <div >
        <h1>This is the About Component</h1>
        <h1>The value of num is {num}</h1>
        <button onClick={()=>setnum(num+1)}>+</button>
        <br/>
        <button onClick={decrement}>-</button>   {/* or can use ()=>setnum(num-1) inside curly braces */}

        </div>

);
}
  
  export default About;