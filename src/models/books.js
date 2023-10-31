const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
    book: {
        type:String,
        required:true,
        unique: true
    },
    author: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    }, 
})

const BooksList = new mongoose.model("BooksList",booksSchema)
module.exports = BooksList