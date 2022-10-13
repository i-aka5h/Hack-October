
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const seeding = require("seeding")
var events = require('events');

const { API, Regions, Locales, Queue } = require("node-valorant-api");
const APIKey = process.env.API_KEY; //YOUR RIOT DEV API KEY
const valorant = new API(Regions.NA, APIKey, Regions.AMERICAS);
const app = express()
const PORT = process.env.PORT || 9002;
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/dualappDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})




const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dcoins: String,
    paystatus:Boolean
})

const tourSchema = new mongoose.Schema(
    {
        created_by: String,
        user_id: String,
        system: String,
        noft: String,
        tourName: String,
        desp: String,
        game: String,
        teams: Array

    }
)

const brackSchema = new mongoose.Schema(
    {
        tour_id: String,
        data: Array,
        
    }
)

const User = new mongoose.model("User", userSchema)
const Tour = new mongoose.model("Tour", tourSchema)
const Brack = new mongoose.model("Brack", brackSchema)
//Routes

app.get("/", (req,res)=>{
    res.send("lodash")
})
app.get("/compete", (req, res) => {
    
    Tour.find({}, (err, reminderList) => {
        if(err){
            console.log(err+"line 56")
        }
        if(reminderList){
            res.send(reminderList)
            // console.log(reminderList+"line 60")
        
            
        }
    })
})
app.post("/manage-t", (req, res) => {
    // console.log(req.body)
    Tour.find({user_id: req.body._id}, (err, reminderList) => {
        if(err){
            console.log(err)
        }
        if(reminderList){
            res.send(reminderList)
        }
    })
})
app.post("/deltour",(req,res)=>{
    console.log(req.body.id)
    var myquery = { _id: req.body.id };
    Tour.deleteOne(myquery,function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
      })
      Brack.deleteOne(myquery,function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        res.send({message:"Deleted!"})
      })

     



})

app.post("/login", (req,res) => {
    const {email, password} = req.body
    User.findOne({email:email}, (err, user) =>{
        if(user){
            if(password === user.password){
                res.send({message: "Login Successful", user: user})
            }
            else{
                res.send({message: "Password does not match"})
            }
            
        }
        else{
            res.send({message: "User not registered"})
        }
    })
})

app.post("/register", (req,res) => {
    const {name, email, password, dcoins, paystatus} = req.body

    User.findOne({email: email}, (err, user) => {
        console.log(user)
        if(user){
            res.send({message: "User-Name or E-mail already registered"})
        }
        
        else{
            const user = new User({
                name,
                email,
                password,
                dcoins, 
                paystatus 
            })
            user.save( err => {
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message: "Successfully Registered, please login."})
                }
            })
            
        }
    })

    
})

app.post('/create-brack-valo', (req, res)=>{
    const {created_by, user_id, system, noft, tourName, desp, game} = req.body
    console.log("Post", created_by, user_id, system, noft, tourName, desp, game)
    const tour = new Tour(
        {
            created_by,
            user_id,
            system,
            noft, 
            tourName, 
            desp, 
            game
        })

        tour.save( err => {
            if(err){
                res.send(err)
            }
            else{
                res.send({message: "Tournament created successfull!"})
            }
        })
    
    

})
app.post('/Regt',(req,res)=>{
    const{TeamName,pid1,pid2,pid3,pid4,pid5,cid,noft }=req.body
    var objT={'TeamName':TeamName,'pid1':pid1,'pid2':pid2,'pid3':pid3,'pid4':pid4,'pid5':pid5}
    console.log(noft)
    console.log(objT)
    Tour.updateOne({_id:cid},{$push:{teams:objT}},
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
                
            }
        });

        let BrackData
        let EmptyBracks = [
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' },
            { t1n: '', t2n: '', t1ss: '', t2ss: '' }
          ]

var EventEmitter = events.EventEmitter;

var flowController = new EventEmitter();

flowController.on('start', function () {
 
    Brack.findOneAndUpdate({_id:cid},{$setOnInsert:{data:EmptyBracks}},{upsert:true},(err, user)=>{
        // console.log(user.data);
        if(err)
        {
            console.log(err)
        }

        flowController.emit('2');
  });
 
});


flowController.on('2', function () {
 
    
    let brackdata
    let index
    if(parseInt(noft) === 8)
    {
        index = [4,5,9,10]
        console.log(index)
    }
    else if(parseInt(noft) === 16)
    {
        index=[0,1,2,3,11,12,13,14]
    }
    else if(parseInt(noft) === 4)
    {
        index = [6,8]
    }
    else 
    {
        index=[7]
    }
    
    Brack.findOne({_id:cid}, (err, bracks)=>{
       brackdata = bracks.data
   
       for(var i=0;i<index.length; i++)
       {
           if(brackdata[index[i]].t1n === '')
           {
               brackdata[index[i]].t1n = TeamName
               break;
           }
           else if(brackdata[index[i]].t2n === '')
           {
               brackdata[index[i]].t2n = TeamName
               break;
           }
       
      
   }
  BrackData = brackdata
  console.log("Line 248",BrackData) 
  flowController.emit('3');
})    
});


flowController.on('3', function () {
    
    console.log("line 256",BrackData)
    Brack.findOneAndUpdate({_id: cid}, {data: BrackData}, (err, user)=>{
        console.log("Updated BRack data");
        res.send({message: "Successfully registered!"})
    })
  });



flowController.emit('start');
    
      
        
})



    

  



        


app.post("/profile", (req, res) => {

   

    if (!(req.body.new.cpassword && req.body.new.NewEnterPassword)){
        console.log("Hello")
    Tour.findOneAndUpdate({created_by: req.body.old.name}, {created_by: req.body.new.name}, (err, user)=>{
        console.log(err)
        
    })
    User.findOneAndUpdate({_id: req.body.new.id}, {name: req.body.new.name}, (err, user)=>{
        console.log(user);
        
        res.send({message: "Username changed, logging out..."})
    }) 

    }


    else
    {

        if(req.body.old.password === req.body.new.cpassword){
            
        User.findOneAndUpdate({_id: req.body.new.id}, {password: req.body.new.NewEnterPassword}, (err, user)=>{
            console.log(user);
            
            res.send({message: "Password changed, logging out..."})
        })
    } 

        else{
        
            console.log("dpass", req.body.old.password , "newpass",req.body.new.cpassword)
            res.send({message: "Password does't match."})
            }
    }

})

app.post('/custom-t', (req, res)=>{
    
    let arr=[]
    for(let i=0; i<req.body.Ts.length; i++)
    {
        arr[i] = req.body.Ts[i].TeamName;
    }
    let seed1 = seeding.fair(arr)
    // console.log(seed1)
    res.send(seed1)
})



app.post('/brack-data', (req,res)=>{

    console.log(req.body)

    
       
     if(req.body.onload){
        console.log("Onloaded")
        
        Brack.findOne({_id: req.body.id}, (err, brack)=>{
            // console.log(brack.data)
          if(err){
              console.log(err)
          }
            if(brack){
                res.send(brack.data)
            }
            else{
                console.log("Brack unavailable")
            }
           
           
        })
    }
    

})



app.post('/brack-data-update', (req,res)=>{

    console.log(req.body)

    // if(req.body.onload){
    //     console.log("Onloaded")
    //     Brack.findOne({_id: req.body.id}, (err, brack)=>{
    //         // console.log(brack.data)
    //         res.send(brack.data)
    //     })
    // }
    
    // else{
    Brack.findOneAndUpdate({_id: req.body.id}, {data: req.body.data}, {upsert:true}, (err, user)=>{
        console.log(user);
        
        res.send({message: "Updated current data!"})
    })
    // }

})

app.post('/leaderboard', (req,res)=>{
    // valorant.ContentV1.getContent(Locales["en-US"]).then(content => {
    //     console.log(content.acts.map(char => { if(char.isActive){return char.name} }))
    //     res.send({content_data:content})
    // });

    valorant.RankedV1.getLeaderboardsByAct("4cb622e1-4244-6da3-7276-8daaf1c01be2", 100, 0).then(content=>{
        console.log("Ranked", content)
        res.send({content_data:content})
    })
    
})

app.post('/success', (req, res)=>{
    let user = req.body
    console.log(user)
    User.findOneAndUpdate({_id: req.body._id}, {dcoins: req.body.dcoins}, (err,userobj)=>{
        if(err)
        {
            res.send({message:"failed"})
        }
        else{
            res.send({message:"success"})
        }
    })
})

app.post('/deduct', (req,res)=>{
    let coins = String(parseInt(req.body.dcoins) - 200)
    User.findOneAndUpdate({_id:req.body._id}, {dcoins: coins}, (err, user)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send({message:true})
        }
    })
})

app.post('/deluser', (req,res)=>{
    console.log(req.body)

    let brack_ids;
    Tour.find({user_id: req.body._id}, function(err, docs){
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(docs)
            brack_ids = docs
            for(var i=0; i<brack_ids.length;i++)
        {
            Brack.deleteOne({_id: brack_ids[i]._id},function(err,obj){
            console.log("Bracks deleted",i)
            })
         }
        }
    })

    


    Tour.deleteMany({user_id: req.body._id},function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        
      })

    User.deleteOne({_id: req.body._id},function(err, obj) {
        if (err) throw err;
        console.log("User deleted");
        res.send({message:"User Deleted, Logging Out"})
      })

   
    
})


app.listen(PORT, () => {
    console.log("BE started at port", PORT)
})

