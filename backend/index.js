const express=require("express");
const app=express();
const stuRoute=require("./routes/sturoute");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
mongoose.connect("mongodb+srv://malviyahimanshi14:ocobOSqvLV5eXZ2M@cluster0.ups2s80.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database connected successfully");
})    
//Body parser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
app.use("/students",stuRoute);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})