import { useState, useEffect, use} from "react";
import axios from 'axios';

const UseEffectAPI=()=>
{
    var [post,setPost]= useState([]);
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>
        {
            setPost(res.data);
        })
        .catch((err)=> console.log("Couldnt read API", err));
    },[])
    return(
        <h1>usereffectapi</h1>
    )
}

export default UseEffectAPI;