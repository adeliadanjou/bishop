const NewApi = require('../models/NewApi');
const {firstApiData,secondApiData,thirdApiData} = require('../myApi/myApi')

let validation = function(req,res,next) {
  
  NewApi.find({}, (error, myApiData) => {
    if (error) {
      next(error);
    } else {

      if(myApiData.length === 0){
        firstApiData()
        console.log("Clash saved!") 
        secondApiData()
        console.log("Pokemon saved!") 
        thirdApiData()
        console.log("Drivers saved!")
        
        }
        else{
          console.log("Base de datos ya creada")
        }
    }

  });

}

module.exports = validation;



