import express from "express";
import mongoose from "mongoose";
import store from "./api/models/store.js";

const app = express()
const port = 5500

const mongoURL = "mongodb+srv://ACaminos:<password>@clustermemes.z97zq.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURL,{useNewUrlParser: true, useUnifiedTopology:true})

app.use(express.json({limit: "100mb"}))

app.post("/api/clients",(req,res)=>{
    let clientData = req.body
    let mongoRecord = []
    clientData.forEach(client => {
        mongoRecord.push({
            firstName : client.firstName,
            phone : client.phone,
            address : client.address
        })
    })

store.create(mongoRecord,(err, records)=>{
    if(err){
        res.status(500).send(err)
    }
    else{
        res.status(200).send(records)
    }
})
})

app.delete("/api/clients",(req,res)=>{
    store.deleteMany({},(err)=>{
        res.status(500).send(err)
    })
})

app.get("/api/clients",(req,res )=>{
    store.find({},(err,docs)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(docs)
        }
    })
})

app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})