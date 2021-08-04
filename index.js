const express = require('express');
const app =  express();
const path = require('path');
const HOST = '0.0.0.0'
const PORT = process.env.PORT || 5000;


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
})

app.listen(PORT, HOST, () => {
    console.log("Server is running on port :", PORT);
})