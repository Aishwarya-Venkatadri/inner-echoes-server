const express = require('express');
const cors = require('cors');
const app =express();

const PORT = 5050;
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Hello, Welcome to Home route");
})

app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`);
});


