// importing important npm packages
const express=require("express");
const BodyParser=require("body-parser");
const date=require(__dirname+"/module.js");
// declaring global arrays
var items=[];
var workList=[];


const app=express();
app.use(BodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
    let day=date.getDate()
    res.render("list",{ListTitle:day,Newitem:items});
})
app.get("/work",function(req,res){
    
    res.render("list",{ListTitle:"Work-List",Newitem:workList})
})
app.get("/about",function(req,res){
    res.render("about");
})

app.post("/",function(req,res){
    let item=req.body.to_do
    if(req.body.btn==="Work-List"){
    workList.push(item)
    res.redirect("/work");
    }
    
   else{
    items.push(item);
    res.redirect("/");}
})

app.listen(3000,function(){
    console.log("Server 3000 is running");
})