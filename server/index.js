const express = require('express')
const mongoose = require('mongoose')
const detailModel = require('./models/details')
const cors = require("cors")

const app = express()
app.use(express.json()) //It will change the data from frontend to json file
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Student")

app.post('/register',(req,res)=>{
    detailModel.create(req.body)
    .then((value) => res.json(value))
    .catch(err => res.json(err))
})

app.post('/login',(req,res) => {
    const {email,password} = req.body;
    detailModel.findOne({email: email})
    .then( (user) =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }
            else{
                res.json("password incorrect")
            }
        }else{
            res.json("no record Exist")
        }
    })
})
app.listen(3000, () =>{
    console.log("server is running")
})
