const NewApi = require('../models/NewApi');

let getItems = function(req,res,next) {
  
  NewApi.find({}, (error, myApiData) => {
    
    if (error) {
      next(error);
    } else {
      res.status(200).json(myApiData);
    }
  });

}

module.exports = getItems;
