var a=5;
let b=6;
const c=8;
b=8;

// const and let are same except const value can not be re initialized and must initialized while declare

// let vs var
//  var is a functional scope let is a block scope 
// block scope example if(){ it is block scope }
//  in var hoisting occour
// console.log(d,">>>")
// temp();
// function temp(){
//     var d=10;
// }

//  single thread thread is busy to running the loop 

// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i)   
//     })

// }

function printDays(day){

    switch(day){

        case 1:
            console.log('Monday')
            break;
        case 2:
            return 'Tuesday'

        default:
            return "Weekend"
    }


}

console.log(printDays(1))

// remaining continue break ;