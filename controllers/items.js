const {Router} = require('express');

const validation = require('../validation/validation')
const getItems = require('./getItems')
const getById = require('./getById')

validation()

module.exports = new Router()
  .get('/items', (req, res, next) => {
    
     getItems(req,res,next)

  })
  .get('/items/:id', (req, res) => {
    
    getById(req,res)

  });




