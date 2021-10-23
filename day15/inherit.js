//  promise 

function hello(){
    setTimeout(function(){
        console.log("hello");
    },3000)
}


function myPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
           resolve({data:"hello"})
        },3000)
    })
}

function fetchApi(){

   return fetch("https://jsonplaceholder.typicode.com/posts").then(
        res=>res.json()
    )


}


const promise1 = Promise.resolve(3);
const promise2 = fetchApi();
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 10000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});


const asyncFunction = async function(){
    try{
    const response= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data =await response.json()
    const pm3=await promise3
    console.log(data,pm3)
    }catch(error){
        console.log("error")
    }finally{
        console.log("finally")
    }
}

asyncFunction()



function myDom(data){
 data= {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

}