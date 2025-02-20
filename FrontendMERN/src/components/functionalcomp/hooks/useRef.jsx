import { useState ,useRef ,useEffect} from "react";
const UseRef=()=>{
    var [text,setText]= useState("");
    var prevRender= useRef();
    useEffect(()=>{
        prevRender.current=text;
        //console.log(prevRender.current);
    },[text]);
  
    return(
        <div>
            <h1>this is useref</h1>
            Type your text:{" "};
            <input type="text" value={text} 
            onChange={(e)=>setText(e.target.value)}/>
            <h1>The current text is {text}</h1>
            <h1>The prev render is {prevRender.current}</h1>
        </div>
           )
}

export default UseRef;