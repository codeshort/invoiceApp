const express=require('express')
const dotenv=require('dotenv').config()
const path=require('path')
const mongoose=require('mongoose')
const connectDB= require('./db')
connectDB()
const app=express()


//body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())


//Routes
app.use('/',require('./routes/index.js'));
app.use('/update', require('./routes/update.js'));


const PORT= process.env.PORT || 3000

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
)
