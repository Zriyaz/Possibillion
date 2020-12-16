const express =  require('express')
const dotenv = require('dotenv').config()
const connectDB = require("./db") 


const app = express()

connectDB()
app.use(express.json())

app.use('/api', require('./api'))    
const PORT  = 8000
app.listen(PORT, ()=>console.log(`Server is Running...on ${PORT}`))