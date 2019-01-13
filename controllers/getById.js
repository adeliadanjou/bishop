const NewApi = require('../models/NewApi');

let getById = function(req,res,next) {
  
      
  NewApi.findOne({"id": req.params.id}, (error, myApiData) => {
    if (error) {
      next(error);
    } else {
      
      let name = myApiData.name
      let nameArr = name.split(" ")
      let myImage;
      let clashId = myApiData.name

      if(clashId.includes(" ")){

        clashId = clashId.replace(/\ /g,"-")
      }

      if(clashId.includes(".")){
        clashId = clashId.replace(/\./g,"")
      }
     
      let idLowerCase = clashId.toLowerCase()

     
      //pokemons:

      if(req.params.id.length <=3){
        myImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${req.params.id}.png`
      }

     //drivers
      else if(req.params.id.length < 20 && req.params.id.length >=3 ){
        myImage = `http://en.wikipedia.org/wiki/${nameArr[0]}_${nameArr[1]}`
      }

      // clash: 
      else {
        myImage = `http://www.clashapi.xyz/images/cards/${idLowerCase}.png`
      }


    let paramsId = {
      "id": myApiData.id,
      "image": myImage,
      "name": myApiData.name,
  }
   
      res.status(200).json(paramsId);
    }
  });
}

module.exports = getById;