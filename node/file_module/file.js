const fs=require("fs");
const path=require("path");


// args arg1-> path where we want to make directory
// fs.mkdir(path.join(__dirname,'test'),{},(err,res)=>{
//     if(err) throw err;
//     console.log(res);
// })

// fs.writeFile(path.join(__dirname,'test','temp.txt'),"I am the content",(err,res)=>{
//     if(err) throw err;
//     console.log(res);
// })

// fs.appendFile(path.join(__dirname,'test','temp.txt'),"I am the content",(err,res)=>{
//     if(err) throw err;
//     console.log(res);
// })

fs.readFile(path.join(__dirname,'test','temp.txt'),"utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})

