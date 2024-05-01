import express from 'express'
import mongoose from 'mongoose'

const port = 5000
const app = express()

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

