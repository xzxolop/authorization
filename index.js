import mongoose from 'mongoose'
import readline from 'readline'

async function dbConnect() {
    try {
        console.log('Connect to data base...')
        await mongoose.connect('mongodb+srv://user:pas@cluster0.wnp1u5i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('You are connected')
    }
    catch (e) {
        console.log('Connection faild!')
        console.log(e)
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const Student = mongoose.model('Student', new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    university: { type: String }
}))

async function writeToDb(studentData) {
    try {
        const student = new Student(studentData)
        await student.save()
        console.log('Student saved to database:', student)
    } catch (error) {
        console.log('Error saving student to database:', error)
    }
}

async function collectStudentData() {
    rl.question('Enter student name: ', async (name) => {
        rl.question('Enter student age: ', async (age) => {
            rl.question('Enter student university: ', async (university) => {
                const studentData = { name, age, university }
                await writeToDb(studentData)
                rl.close()
                process.exit(0)
            })
        })
    })
}

dbConnect()
collectStudentData()