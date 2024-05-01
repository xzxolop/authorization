import express from 'express'
import mongoose from 'mongoose'
import authRouter from './authRouter.js'

const port = 5000
const app = express()

app.use(express.json())
app.use('/auth', authRouter)

app.listen(port, (error) => {
    if (error) {
        return console.log(error)
    }
    console.log(`Server start on port ${port}`)
    dbConnect()
})

async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://user:pas@cluster0.wnp1u5i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    }
    catch(e) {
        console.log(e)
    }
}

