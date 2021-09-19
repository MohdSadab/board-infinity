let best_arr=[]; //best practice to declare array
let arr=new Array("a","b","c")

// inserting value at end of the array
best_arr.push(1)
// inserting array at the end  a array
best_arr.push([1,2])
// pop from end of the array 
best_arr.pop() 

// in javascript array is dynamic no need to spicify the size 
//  element access using index arr[index]

//  finding index of an element in the array
const searchElement=1
best_arr.indexOf(1) // returns the index of the element if found else -1

// deleting all the elements from array
arr.length=0;

// arr.map,arr.filter,arr.reduce,
let my_arr=[10,20,30,40,50] // output new array square of the numbers

// used map when when we need new array after performing operation
let result = my_arr.map((current, index) =>{
    return current**2
})
console.log(result,my_arr)

// used filter when when we need new array after filtering element operation
// problem statement remove all the elements greater then = 40
let filter_arr=my_arr.filter((current, index) =>current<40)
console.log(filter_arr,"filter")


// used when when we need accumulated result 
//  problem statement find all the element sum present in an array

// here current pointing to second element of the array which is 20 and prev point first element which is 10
// ans 10+20+30+40+50
// let sum=my_arr.reduce((prev,current) =>{
//     return current+prev
// })

// here current pointing to first element of the array which is 10 prev value is 60 (initialized)
// ans 60+10+20+30+40+50
let sum=my_arr.reduce((prev,current) =>{
    return current+prev
},60)


console.log(sum,"sum")

// array concatenation
const array1 = ['a', 'b', 'c','d'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

// sort method
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

let ar=[20,10,100,25,40]
// (a,b)=>a-b) is same as (a,b)=>{return a-b})
// b=10,a=20 b-a=-10 -ve means decending sort 
//  +ve means ascending order
ar.sort((a,b)=>b-a) 
console.log(ar,"sort")

// string
var string="jssjkjkkjls";
string='sjsjsjsjsjs';
string=` template literals ${arr}`

// string is pass by value 
let string2=string
string2[0]='p' // does not work neither gives error
console.log(string,string2)

//  string declare without new key word is the primitive data type
let str1="hello";
let str2="hello";

//  == compare the values only no data type comparison occour 
console.log(str1==str2);

// === compare the values and data type comparison occour strong compairsion
console.log(str1==str2);
// str1 => "hello" data type => "primitive data type string"
// str2 => "hello" data type => "primitive data type string"

let str3= new String("hello")
//  == compare the values only no data type comparison occour 
console.log(str1==str3);

// === compare the values and data type comparison occour strong compairsion
// str1 => "hello" data type => "primitive data type string"
// str3 => "hello" data type => "string object"
console.log(str1===str3 ,typeof(str3));

let x = new String("John");             
let y = new String("John");

// (x == y) as well as (x === y) is false because x and y are objects both have diffrent addresses


let str = "Apple, Banana, Kiwi";
const startPos = 7;
const endPos = 13;
str.slice(startPos, endPos);     // Returns Banana


// let str1 = "Apple, Banana, Kiwi";
// const length=6
// str1.substr(startPos, 6)   

let texts = "Please visit Microsoft!";
let newText = texts.replace("Microsoft", "W3Schools");  // replace only the firstmatch and return the new string

let text = "Please visit Microsoft!";
console.log(text.replace("e", "W3"))


let text2 = "a,b,c,d,e,f";
const myArray = text2.split(","); //returns [a,b,c,d,e,f] split the string using ',' character and returns array [a,b,c,d,e,f]

//  forEach is used when we does not need map
array1.forEach((elem,index)=>{
    array1[index]+='e';
    console.log(array1[index])
})


const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(13);

for (const item of set1) {
  console.log(item);
  // expected output: 42
  // expected output: 13
}

console.log(typeof(set1))
//  no dublicate is allow unique values 

//  used set when we want to remove duplicates from array 