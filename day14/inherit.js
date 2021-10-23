// let count=0;
// const badFunction=(...args)=>{
//     console.log("bad function called",args);
//     count++;
// }




// let debounceFunction=function(callBack, delay){
//     let timeOut;
//     return function(...args){
//         let context=this
//         clearTimeout(timeOut);
//         timeOut=setTimeout(function(){
//             callBack.apply(context,args);
//         },delay);
//     }
// }
// // read and code about throttling 

// const betterFunction=debounceFunction(()=>badFunction("hello",1),300);

// // iterators 
// // const arr=[1,2,3,4]
// // console.log(arr)
// // let temp=arr[Symbol.iterator]()
// // console.log(temp.next(),"<<<<<")
// // console.log(temp.next(),"<<<<<")
// // console.log(temp.next(),"<<<<<")
// // console.log(temp.next(),"<<<<<")
// // console.log(temp.next(),"<<<<<")

// function* infiniteGetters(){
//     let id=0;
//     while(true){
//         console.log("before yield")
//         yield id
//         console.log("after yield")
//         id++;
//     }
// }

// const itr=infiniteGetters()
// // while(itr.next().value<1000){
//     console.log(itr.next())
//     console.log(itr.next())
// // }

// // async => javascript did not wait for response or results

// setTimeout(function(){
//     console.log("i am first")
// },1000)
// setTimeout(function(){
//     console.log("i am second")
// },0)
// setTimeout(function(){
//     console.log("i am third")
// },100)

// console.log("i am last")

// sync means execution of code occour line by line (sequence wise)

// diffrence between async and parllel

// in async task is not divided into multiple tasks
//  in parllel task is divided and executed parllely

// callback hell problem 
setTimeout(function(){
    console.log("i am first")
    setTimeout(function(){
        console.log("i am second")
        setTimeout(function(){
            console.log("i am third")
            setTimeout(function(){
                console.log("i am fourth")
            },1000)
        },1000)
    },1000)
},5000)

// for avoiding call back hell promise in javascript came
// for avoiding too much promises async await comes