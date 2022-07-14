import express from "express";

const app = express()
const port = 5500

app.get("/",(req,res )=>{
    res.send(
        "Hello word"
    )
})

app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})