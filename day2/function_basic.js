// var && let 

// {
//     let x=5;
// }

// var b=5;
// b=6;
// function multiply(x,y){
//     b=5;
//     return x*y;
// }

// console.log(b) gives refrenced error

// console.log(x)
// var i

// for(initialization;conditional;increment)
// for(i=0;i<5;){
//     console.log(i) 
//     i++;  
// }



// console.log(i)

//  variable scoping
// global scope 
// local scope -> 1 => functional scope (var) 2-> block scope (let,const)


//  in javascript function used as object or first class function

//  pass by refrence pass by value

//  in javascript all the objects are passed by refrence default untill you create the copy 

// let obj={
//     a:5
// };

// const newObj=obj

// newObj.b=6;

// console.log(obj,newObj)

// let a=6;
// let b=a;

// in pass by value memory addreses are diffrent
//  in pass by refrence memory addresses are diffrent



// function normalAddition(parameter1,parameter2) {
//     // operation permored
//     return parameter1 + parameter2
// }

// const add25=normalAddition

// console.log(add25(2,5))


// function updateObj(obj,a){
//     obj.new="new value"
//     a=7
//     return a
// }

// let myObj={a:7}
// let b=6;
// console.log(updateObj(myObj,b),b)


//  in javascript we can treat function as a variable like assigning a function returning a function used as parameter etc

// function returnExample(a,b){
//     // return {a:a,b:b}
//     // return [a,b]
//     return function(){
//         return a*b
//     }
// }

// //  passing function as a parameter 

// function asParameterExample(callback,time){ 
//     let time2=1000 
//     if(time2===1000)
//         callback()
// }

// hello() we can not call this here because it is not assign to the function because it is anonymous function
var hello=function(){ 
    // anonymous function
    console.log("hello")
}

const hell=new hello();
// asParameterExample(hello)

//  used of callback mainly used in async calls
// setTimeout(hello,1000)
// 1- when we call the server then we don't know about the time taken by response so it is async 
// 2- in map reduce filter forEach etc function


function multiplyX(x){
    return function multiplyY(y){
        return x*y
    }
}

//  print the table of 5

const multiplyBy5=multiplyX(5);
// const multiplyBy5= function multiplyY(y){
    //     return 5*y
    // }
for(let i=1;i<11;i++){
    console.log(multiplyBy5(i))
}

// iifc imediately invocked function used mainly for security purpose to restrict the scoping of the variable

// window object is the global object 
(function(){
 var z=6;
 console.log(z);
})();

// console.log(z);

//  arrow function 
// const arrowFunction=()=>{
//     console.log("arrow function called")
// }
// console.log(arrowFunction());


// function Constructor(x){
//     this.x=x;
// }

// const constructor= new Constructor(4)
// console.log(constructor)

// normal function
//  method (function inside the object known as method)

// let obj={
//     a:5,
//     showA(){
//         // i am the method
//         return this.a
//     }
// }

//  this of arrow function refrence to the this of the context where the method/function is called
// let obj={
//     a:5,
//     showA:()=>{
//         // i am the method
//         return this
//     }
// }
// console.log(obj.showA()) // output the window object

function thisContext(){
    console.log(this)
}

console.log(thisContext())

