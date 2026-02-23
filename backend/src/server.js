import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app=express();
const port=process.env.PORT || 3001
app.use(cors({ 
    origin:"http://localhost:5173"
}))
app.use(express.json())
app.use("/books", bookRoutes)
connectDB().then(()=>{
    app.listen(port, () =>{
        console.log("Server started on 5001")
        console.log(`http://localhost:${port}/books`)
    })
})
// app.get('/',(req,res)=>{
//     res.status(200).json("Hello")
//     console.log('Hello')
// })
// qpp.listen(port,() =>{
//     console.log(`http://localhost:${port}`)
// })