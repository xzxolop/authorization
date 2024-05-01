import express from 'express'
const port = 5000

const app = express()

app.listen(port, (error) => {
    if (error) {
        return console.log(error)
    }

    console.log(`Server start on port ${port}`)
})
