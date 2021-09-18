const express = require("express")
const morgan  = require("morgan")
const mongoose = require("mongoose")
const helmet = require('helmet')
const dotenv = require('dotenv')
const cors = require('cors')

const authRouter = require('./routes/auth')
//const usersRouter = require('./routes/user')
const productRouter  = require('./routes/Product')

const app = express()

dotenv.config()


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Connected to the database')
})


const corsOptions = {
    origin:"http://localhost:3000",
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(helmet())
app.use(morgan("dev"))
//app.use(express.static('uploads'))
app.use('/api/auth',authRouter)
//app.use('/api/users',usersRouter)
app.use('/api/products',productRouter)
let port = process.env.PORT

app.listen(port,()=>{
    console.log('Server is runnig on port '+ port +'...')
})