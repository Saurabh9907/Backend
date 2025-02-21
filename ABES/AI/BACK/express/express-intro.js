// const express = require('express');

import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req,res) =>{
    res.send("Welcome to Express")
});

// http://localhost:3000/api/saurabh/5454
app.get('/api/:name/:rollno', (req, res) => {
    try{
        const {name, rollno} = req.params;
        res.send(`Welcome ${name} and Your roll no is ${rollno}`)
    }
    catch (error){
        console.log(`Error is : ${error.message}`)
    }
});

// http://localhost:3000/api?name=Saurabh&rollno=123
app.get('/api', (req,res) =>{
    const data = req.query;
    // const {name = "Guest", rollno = 100} = req.query;
    try{
        const {name,rollno} = req.query;
        if (!name){
          return res.status(400).send('Name is required');

        }
        else {
          res.send(`Welcome to ABES: ${name} and Roll no. id ${rollno}`)
    }
    }
    catch (error){
        console.log(`Error: ${error.message}`)
    }
    
});

app.listen(port , () => {
    console.log(`Server is runing on port ${port}`);
});