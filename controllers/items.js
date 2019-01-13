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
  .get('/items/:id', (req, res) => {
    
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

      
        console.log(idLowerCase)

        
       
        //pokemons:

        if(req.params.id.length === 1){
          myImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${req.params.id}.png`
        }

       //drivers
        else if(req.params.id.length < 20 && req.params.id.length !== 1 ){
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

  });




