// import a module 
const person=require('./module/person');
const uuid=require('uuid');
const path=require('path');
const fs=require('fs');
const Logger = require('./Event/event');

// console.log(uuid.v4());

// node inbuilt module 
//  path, url, fs, http etc

const data=[
    {id:1,name:'Abc'},
    {id:2,name:'Abd'},
    {id:3,name:'Abe'}
]

const http=require('http');

const objLog =new Logger();
const server=http.createServer((req,res)=>{
    
    // res.end(`req url is ${req.url} ${req.method}`);
    
    switch(req.url){
        case "/about":
            const filepath=path.join(__dirname,'public','about.html')
            fs.readFile(filepath,"utf-8",(err,data)=>{
                if(err) throw err;
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end(data)
            })
            break;
        
        case "/api":
            
            if(req.method=='GET'){
                res.writeHead(200,{'Content-Type': 'application/json'});
                res.end(JSON.stringify(data))
            }
            if(req.method=='POST'){
                let temp=''

                req.on('data', chunk => {
                    temp+=chunk.toString()
                    // console.log('A chunk of data has arrived: ',temp );
                  });
                req.on('end', () => {
                    // console.log('No more data',temp);
                    data.push(JSON.parse(temp))
                    objLog.on('message',data=>console.log(data,">>>>"))
                    objLog.logs("data is added")
                    res.writeHead(200,{'Content-Type': 'application/json'});
                    res.end(JSON.stringify(data))
                })
                
            }
            break;

        default: 
            res.writeHead(200);
            res.end("home page")
            break;

    }
    
})

server.listen(5000,()=>console.log('listening on port 5000'))