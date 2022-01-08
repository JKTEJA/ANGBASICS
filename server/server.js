const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.json());
app.use(cors());
const port =3000;
app.get('/',function(req,res){
    res.send("Welcome To The World");
})
app.post('/',function(req,res){
    console.log(req,body);
    res.status(200).send({"massage":"Data received"})
})
app.listen(port,function(){
console.log("Listening to the port",port);  
})