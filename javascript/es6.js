// //normal function
// function f1(){
//     console.log("yo yo, hey hey");
// }
// f1();
// //arrowfunction
// var arrowfunction= () =>{
//     console.log("this is an arrow function");
// }
// arrowfunction();
// //scoping

// let a=10;
// var b= 30;
// var c=40;
// const e=100;
// console.log("Value of a is " ,a);
// console.log("Value of b is " ,b);
// console.log("Value of c is " ,c);
// console.log("Value of e is " ,e);
// {
//     console.log("Inside paranthesis");
//     a=20
//     console.log("Value of a is " ,a);
//     b=70
//     console.log("Value of b is " ,b);
//     let c=90;
//     console.log("Value of c is " ,c);
//     let d=20;
//     console.log("Value of d is " ,d);
//     console.log("Value of e is " ,e);
//     const f= 30;
//     console.log("Value of f is " ,f);
    
// }
// console.log("Outside paranthesis");
// console.log("Value of a is " ,a);
// console.log("Value of b is " ,b);
// console.log("Value of c is " ,c);
// //console.log("Value of d is " ,d);// error undefined
// //console.log("Value of f is " ,f);//error

// //ternary operator
// a=11111
// console.log((a%2)? "odd":"even"); //optimising without using == or === operator

// //spread operator(...element)
// var stud1=["1","2","3","4"];
// const stud2=["5","6","7","8"];
// const stud3=["9","10","11","12"];
// const studall=[...stud1,...stud2,...stud3];
// console.log(studall);

// //rest operator(...element)
// function stud_db(...stud1){

//     console.log(stud1);
// }
// stud_db(studaall);

// //decontructor operator
// var array=[1,2,3,4,5,6,7,8]
// var [a,b,c,d,e,f,g,h,i]= array
// console.log(a,b,c,d,e,f,g,h,i);

// //hoisting
// //var
// console.log(b);
// var b=30;
// console.log(b);
// //let
// console.log(a);
// const a=10;
// console.log(a);
// //const
// console.log(c);
// const c=10;
// console.log(c);

// //functional hoisting
// let count=1;
// func_hoisting();

// function func_hoisting(){ //normall
//     console.log("heyyyyyyyyyyyyyyyy",count++);
// };

// // func_hoisting();

// func_hoisting=()=>{ //arrow
//     console.log("keyyyyyyyyyyyyy");

// }
// //func_hoisting();

//class and objects
class Ex{
    classfun(){
        console.log("hello iam rubini");
        return "eeeee";
    }
    a=10;
}

obj1= new Ex();
console.log(obj1.a);
console.log(obj1.classfun());

//without using new keyword,  a class cannot be used or contructor cannot be used