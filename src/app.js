const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000
require('../src/db/conn.js')

const router = require('../src/routers/bookrouters.js')

var app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/books',router)



app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})
