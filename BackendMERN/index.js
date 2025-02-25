const express = require("express");
const mdb = require("mongoose");
const dotenv= require('dotenv');
const Signup= require('./models/signupSchema')
const app = express();
app.use(express.json())
const PORT = 3008;
dotenv.config();

//console.log(process.env.MONGODB_URL);

mdb
  .connect(process.env.MONGODB_URL)    //or .connect("mongodb://localhost:27017/Sample_db") or .connect("mongodb://127.0.0.1:27017/Sample_db") 
  .then(() => {
    console.log("MDB connection successful");
  })
  .catch((err) => {
    console.log("Error occured,check your connection string", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend Server</h1>");
});

app.get("/static", (req, res) => {
  res.sendFile("/Users/rubin/OneDrive/Desktop/MERN/index.html");
});

app.post("/signup",(req,res)=>{
    try{
      
        const {name,email,password,phone}= req.body;
        console.log(req.body);
    const newSignup= new Signup({
        name: name,
        email:email,
        password:password,
        phone: phone,

    });
    newSignup.save();
    console.log("Signup successful");

    res.status(201).json({message:"Signup Successful",isSignup:true});
}
catch(error){
    console.log(error);
    res.status(201).json({message:"Signup UnSuccessful",isSignup:false});
}
}

);

app.listen(PORT, () => {
  console.log("Server started successfully");
});
