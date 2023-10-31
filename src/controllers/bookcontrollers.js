const booksList = require('../models/books')

exports.getdefault = (req,res)=>{
    res.send("Hello This is books Api")
}

exports.postb = async(req,res)=>{
    try{
       const addingBooks = new booksList(req.body)
       const insert = await addingBooks.save();
       if (!addingBooks) {
        return res.status(202).json({ message: 'type Valid data' });
    }
       res.status(201).send(insert)
    }catch(err){
       console.log(err);
       res.status(400).send(err)
    }    
}

exports.getb = async(req,res)=>{
    try{
       const showBooks = await booksList.find({}).sort({book:1});
       if (!showBooks) {
        return res.status(404).json({ message: 'Book not found' });
    }
       res.status(200).send(showBooks)
    }catch(err){
       console.log(err);
       res.status(404).send(err)
    }
    
}

exports.getbyId = async(req,res)=>{
    try{
        const _id = req.params.id;
       const showBooks = await booksList.findById(_id);
       if (!showBooks) {
        return res.status(404).json({ message: 'Book doesnot exist' });
    }
       res.status(201).send(showBooks)
    }catch(err){
       console.log(err);
       res.status(404).send(err)
    }
    
}

exports.updatebId = async(req,res)=>{
    try{
        const _id = req.params.id;
       const showBooks = await booksList.findByIdAndUpdate(_id,req.body,{
             new : true  // return the updated document
       });
       if (!showBooks) {
        return res.status(404).json({ message: 'Book not found' });
    }
       res.status(201).send(showBooks)
    }catch(err){
       console.log(err);
       res.status(404).send(err)
    }
    
}

exports.deletebId = async(req,res)=>{
    try{
        const _id = req.params.id;
      const deletedBook = await booksList.findByIdAndDelete(_id );
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found you are trying to delete' });
    }
       res.status(201).send('data deleted')
    }catch(err){
       console.log(err);
       res.status(404).send(err)
    }
    
}