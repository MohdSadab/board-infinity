// we can inherit the object using Object.create

let person={
    "name":"Sadab",
    "age":25,
    "getDetails":function(){
        return this.name+" "+this.age
    }
}

let teacher=Object.create(person)
teacher.name="Niraj"
teacher.subject="Math"

// here the output is Niraj 25 this is pointing to the teacher object
console.log(teacher.getDetails(),">>>",teacher)


// call apply bind used for fixing the this refrence 

let obj ={
    "name":"Sadab",
    "age":25
}


let printDetails=function(state,City){
    return this.name+" with age "+ this.age + "state is "+ state + " " +City
}


console.log(printDetails.call(obj,"U.P","Kanpur"))


// example of apply 
// the different between call and apply is lies only with arguments passing

let obj2 ={
    "name":"Sadab",
    "age":25
}


let printDetails2=function(...args){
    return this.name+" with age "+ this.age + "state is "+ args[0] + " " +args[1]
}

// function borrowing 
console.log(printDetails2.apply(obj2,["U.P","Kanpur"]))



// function binding
//  bind the this with current object (which you are passing) and args and returns a function refrence which you can call later

const tempPrint=printDetails.bind(obj,"Input1","Input2")
console.log(tempPrint(),"bind ")


let personDoe = {
    name: 'John Doe',
    getName: function(state,country,...rest) {
        console.log(this.name,state,country,rest);
    }
};
// it's a callback function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// setTimeout(function() {console.log(personDoe,">>>>>>")},5000)

// console.log(personDoe.getName.bind(personDoe))

// setTimeout(personDoe.getName.bind(personDoe), 5000);


Function.prototype.myBind=function(...args){
    let currThis=args[0];
    args.shift()
    let currFunc=this;
    return function(...temp){
        currFunc.apply(currThis,[...args,...temp]);
    }
}

const temp=personDoe.getName.myBind(personDoe,"Obj1","Obj2")
temp("Obj3","Obj4")
// console.log(temp(),">>>>>")


// implement a function SUM(1)(2)(3)(4)() = Output 10
// SUM(1)(2)() => Output 3