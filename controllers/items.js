const {Router} = require('express');
const NewApi = require('../models/NewApi');
const {firstApiData,secondApiData,thirdApiData} = require('../myApi/myApi')


// firstApiData() 
// secondApiData() 
// thirdApiData();


module.exports = new Router()
  .get('/items', (req, res, next) => {
    
    NewApi.find({}, (error, myApiData) => {
      if (error) {
        next(error);
      } else {
        res.status(200).json(myApiData);
      }
    });


  })
  // .get('/:id', (req, res) => {
  //   // Code here
  //   res.sendStatus(200);
  // });




