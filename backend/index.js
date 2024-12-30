import express from "express";
import cors from "cors";
import mongoose from "mongoose";

//Mongoose schema 
console.log("connecting to Database . . .");
await mongoose.connect('mongodb+srv://srecharandesu:charan%402006@cluster0.a9berin.mongodb.net/2025-Preds');
console.log("Connected to Database.");


const DataSchema = new mongoose.Schema({
    name : String,
    data : Object
})

const Data = mongoose.model("Data",DataSchema);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello from backend.")
})

app.post('/post',async(req,res)=>{
    const {name,data} = req.body;
    // console.log()
    await Data.create({
        name : name,
        data : JSON.parse(data)
    })

    res.json({
        msg : "Successfully recorded.",success : true
    })

})

app.listen(3000,(req,res)=>{
    console.log("Listening on port 3000 . . .");
});