import express from "express";
import mongoose from "mongoose";

const app = express()
const port = 5500

const mongoURL = "mongodb+srv://ACaminos:<password>@clustermemes.z97zq.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURL,{useNewUrlParser: true, useUnifiedTopology:true})

app.use(express.json({limit: "100mb"}))

app.post("/api/clients",(req,res)=>{
    console.log("dumy endPoint")
    res.send("You have posted something")
})

app.get("/",(req,res )=>{
    res.send(
        "Hello word"
    )
})

app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})