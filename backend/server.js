const express = require("express")
const morgan  = require("morgan")
const mongoose = require("mongoose")
const helmet = require('helmet')
const dotenv = require('dotenv')

//const authRouter = require('./routes/auth')
//const usersRouter = require('./routes/user')
const productRouter  = require('./routes/Product')

const app = express()

dotenv.config()


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Connected to the database')
})


app.use(express.json())
app.use(helmet())
app.use(morgan("dev"))
//app.use(express.static('uploads'))
//app.use('/api/auth',authRouter)
//app.use('/api/users',usersRouter)
app.use('/api/products',productRouter)
let port = process.env.PORT

app.listen(port,()=>{
    console.log('Server is runnig on port '+ port +'...')
})