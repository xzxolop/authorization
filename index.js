import mongoose from 'mongoose'
import { Schema } from 'mongoose'

async function dbConnect() {
    try {
        console.log('Connect to data base...')
        await mongoose.connect('mongodb+srv://user:pas@cluster0.wnp1u5i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('You are connected')
    }
    catch(e) {
        console.log('Connection faild!')
        console.log(e)
    }
}

const Person = mongoose.model('Person', new Schema({
    name: {type: String},
    age: {type: Number}
}));

const Student = mongoose.model('Student', new Schema({
    name: {type: String},
    age: {Number},
    university: {type: String}
}));

async function WriteToDb() {
    try {
        const person = new Person({name: 'Ruslana', age: 19});
        await person.save();
        console.log('Person is saved');

        const student = new Student({name: 'Ruslana', age: 19, university: 'UFU'});
        await student.save();
        console.log('Student is saved');
    } catch (e) {
        console.log(e);
    }
}

dbConnect()
WriteToDb()
