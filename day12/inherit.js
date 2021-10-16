// inheritance in javascript:
// inheritance in javascript is diffrent then other(Conventional) inheritance like (CPP,JAVA) etc 
// inheritance in javascript used prototypal(prototype chaining)

// almost everything is an object in javascript
let arr=[1,2,3,4];
console.log(arr);

// working of prototype inheritance is
// 1-> it checks in it's own properties 
// 2-> if not present in it's own checks it's proto of proto untill reach to null


//  why we use inheritance what is the need ?

//  something you can reuse without copying it 

// example person -> name,age
//  person can be a teacher or student 

let objTeacher={
    name:"John",
    age:30,
    subject:"Math",
    printDetails:function(){
        console.log("my name is",this.name,this.age,this.subject)
    }
}

let objStudent={
    name:"Doe",
    age:15,
    class:"8th",
    printDetails:function(){
        console.log("my name is",this.name,this.age,this.class)
    }
}

objTeacher.printDetails()
objStudent.printDetails()


function Person(name,age){
    this.name=name;
    this.age=age;
    this.getName=function(){
       return  this.name
    }
    this.getAge=function(){
        return this.age
    }
}


function Teacher(subject){
    
    this.subject=subject;
}


function Students(name,age,clas){
    this.clas=clas
}

Teacher.prototype=new Person("Jhon",31)

Teacher.prototype.getDetails=function(){
    console.log("My Name Is",this.getName(),"having age",this.getAge(),"Teacher of subject",this.subject)
}

const teacher=new Teacher("Math")
teacher.getDetails()



Students.prototype=new Person("Doe",14)

Students.prototype.getDetailsOfStudent=function(){
    console.log("My Name Is",this.getName(),"having age",this.getAge(),"Student of clas",this.clas)
}


const student=new Students("Doe",15,"8th")

console.log(student.getDetailsOfStudent(),">>>>",teacher.getDetails())







