const express = require('express')
const router = express.Router()
const booksController = require('../controllers/bookcontrollers')

router.get('/',booksController.getdefault)

router.post('/add',booksController.postb)

router.get('/show',booksController.getb)

router.get('/show/:id',booksController.getbyId)

router.get('/update/:id',booksController.updatebId)

router.delete('/delete/:id',booksController.deletebId)

module.exports = router