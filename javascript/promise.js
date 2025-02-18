function promiseEg(value){
    return new Promise((resolve,reject)=>{
        //resolve("this is a promise");
        setTimeout(()=>{
            if(value)
                resolve("the promise is resolved");
            else
                reject("the promise is rejected");
        },5000)
 
})

}
//console.log(promiseEg());
promiseEg(false).then((res)=>
{
    console.log(res);           //to print when promise is resolved
}).catch((res)=>{
    console.log(res);           //tp print when promise is rejected
});