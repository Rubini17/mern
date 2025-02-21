import { use } from "react";
import useMemoize from "./customhooks/memorizinghooks.jsx";
const UseMemoize=()=>{
    var [cusId,setCusId]= useMemoize("CustomerId","")
    var [pass,setPass]= useMemoize("Password","")
    const handleEvent=()=>{
        localStorage.removeItem("CustomerId");
        localStorage.removeItem("Password")
    }
    return(
        <div>
            <h1>This is a custom hook designed using useState</h1>
            CustomerId:<input type="text" value={cusId} onChange={(e)=>setCusId(e.target.value)}/>
            Password:<input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <button onClick={handleEvent}>Login</button>
        </div>
    )
}
export default UseMemoize;