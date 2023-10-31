const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/BooksApi",{
    // useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("connection successfully established");
}).catch((err)=>{
    console.log(err);
})