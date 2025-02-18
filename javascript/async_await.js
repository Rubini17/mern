// async function asaw(){
//     var a=15
//     setTimeout(function(){
//         console.log('yo yo');
//     },6000)
//     console.log(await a);
//     // console.log("heyyyyyyy heyyyyy");
// }
// asaw()
// console.log(asaw());
// asaw().then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// });

// insta console demo

// async function postCode(){
//     var post= new Promise((createPost)=>{
//         createPost("Post Created Successfully");
//     })
//     console.log(await post);
// }

async function postCode(){
    var post= new Promise((createPost)=>{
        setTimeout(()=>{
            createPost("Post Created Successfully");
        },5000)
    })
    const [pos,like,comment]= await Promise.all([post, liked(), commented()]);
    console.log(pos);
    console.log(like);
    console.log(comment);
//     console.log(await post);
//     console.log(await liked());
//     console.log(await commented());
//
 }


liked=async()=>{
    return new Promise((likePost) => {
        setTimeout(()=>{
            likePost("liked Successfully");
        },5000);
        
    })

}

commented=async()=>{
    return new Promise((commentPost) => {
        setTimeout(()=>{
            commentPost("commented Successfully");
        },5000);
        
    })

}
postCode();
