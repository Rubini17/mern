// import { useState, useMemo } from "react";

// function slowFun(num){  //to slow down a function
//     for(var i=1;i<10000000000;i++)
//     {}
//         return num*2;
    
// }

// const UseMemo=()=>{
//     var [number,setNum]= useState(0);
//     var [theme,setTheme]= useState(false);
//     var doublingNum=useMemo(()=>{
//         return slowFun(number);
//     },[number]);
//     var styling={
//         backgroundColor:theme ? "black":"white",
//         color: theme ? "white":"black",
//     }
//     return (
//     <div style={styling}>
//         <h1> this is use UseMemo</h1>
//         Number: <input type="number" value={number} onChange={(e)=> setNum(e.target.value)}/>
//         <h1>The number is {number}</h1>
//         <h1>The double of number is {doublingNum(number)}</h1>
//         <h1>The slow of number is {slowFun(number)}</h1>

//        <center><button onClick={()=>setTheme(!theme)}>Change Theme</button></center>
//     </div>
//     )
// }
// export default UseMemo;

import { useState, useMemo } from "react";

function slowFun(num) {
  for (var i = 1; i < 1000000000; i++) {}
  return num * 2;
}

const UseMemo = () => {
  const [number, setNum] = useState(0);
  const [theme, setTheme] = useState(false);

  const doublingNum = useMemo(() => {
    return slowFun(number);
  }, [number]);

  const styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };

  return (
    <div style={styling}>
      <h1> this is useMemo Example</h1>
      Number:{" "}
      <input
        type="number"
        value={number}
        onChange={(e) => setNum(parseInt(e.target.value) || 0)}
      />
      <h1>The number is {number}</h1>
      <h1>The double of number is {doublingNum}</h1>

      <center>
        <button onClick={() => setTheme(!theme)}>Change Theme</button>
      </center>
    </div>
  );
};

export default UseMemo;
