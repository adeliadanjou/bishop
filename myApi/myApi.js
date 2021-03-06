const axios = require('axios');
const parser = require('xml2json');
const NewApi = require("../models/NewApi");


let firstApiData = () => {
  axios.get(`http://www.clashapi.xyz/api/cards`)
    .then(apiData => {
     
      apiData.data.map(function (obj) {
        
        var id = obj._id;
        var name = obj.name;

        var myNewApi = new NewApi({
          id,
          name
        });

        myNewApi.save()
        
      })

    })
    .catch("loading")
}


let secondApiData = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then(apiData => {


      for (var i = 0; i < apiData.data.results.length; i++) {

        var id = i;
        var name = apiData.data.results[i].name

        var myNewApi = new NewApi({
          id,
          name
        });

        myNewApi.save()
        
      }

    })

    .catch("loading")
}


let thirdApiData = () => {
  axios.get(`http://ergast.com/api/f1/drivers/`)
    .then(apiData => {

      var options = {
        object: true,
        reversible: false,
      };

      var json = parser.toJson(apiData.data, options);

      var drivers = json.MRData.DriverTable.Driver
      

      drivers.map(function (obj) {

        var id = obj.driverId;
        var name = obj.GivenName + " " + obj.FamilyName;

        var myNewApi = new NewApi({
          id,
          name
        });

        myNewApi.save()
        
      })

    })
    .catch("loading")
}


module.exports = { firstApiData, secondApiData, thirdApiData };