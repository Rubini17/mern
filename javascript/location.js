function locFinder(loc, time){
    var location= new Promise((locFound,locNotFound)=>
    {
        setTimeout(()=>{
            if(isFound(loc,time))
            {
                locFound(loc+ " found");
            }
            else{
                locNotFound(loc+ " not found");
            }
        },time)
    })
    location.then((found)=>{
        console.log(found);
    }).catch((notFound)=>
    {
        console.log(notFound);
    })
}

isFound=(loc,time)=>{
    location="khennai";
    t=500;
    if(loc === location && t<=time) //task2 , t is not getting checked
    {
        return true;
    }
    else{
        return false;
    }
}
locFinder("Chennai",2000);