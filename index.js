const express = require('express');
const connect = require('./connection');
const student = require('./routes/student');
const app = express();
connect();
app.use(express.json())
app.use(student)


app.listen(3000,(err)=>{
    if (err) {
     console.log(err)   
    }
    else{
        console.log("Server running successfully on port 3000")
    }
})