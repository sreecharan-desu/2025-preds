const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello from backend");
});

app.post("/post", async(req,res)=>{

    const {data,name} = req.body;

    await Data.create({
        data : data,
        name : name
    })

    res.json({
        msg : "recorded successfully...",
        success : true
    })


});

async function startServer() {
    try {
        app.listen(5000, () => {
            console.log("Listening on port 5000....");
        });
    } catch (error) {
        console.error("Error deleting records:", error);
    }
}

startServer();
