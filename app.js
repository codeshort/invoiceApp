const express=require('express')
const dotenv=require('dotenv').config()
const path = require('path')
const hbs=require('hbs')
const mongoose=require('mongoose')
const connectDB= require('./db')
connectDB()
const app=express()

const publicDirectoryPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname,'/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
//body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(publicDirectoryPath))

//Routes
app.use('/',require('./routes/index.js'));
app.use('/update', require('./routes/update.js'));


const PORT= process.env.PORT || 3000

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
)
