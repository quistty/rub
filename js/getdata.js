import fetch from "node-fetch";
//const fetch = require('node-fetch');
//let apiFile = require('../apiKey.json');
//let apiKey = apiFile["API_KEY"]



fetch(`https://api.hypixel.net/skyblock/bazaar`) 
    .then(response => response.json())
    .then(data => {
       let griffinInfo = data["data.products.GRIFFIN_FEATHER.quick_status.buyOrders"]
        console.log(griffinInfo)
//        console.log(data)

    })
    .catch(error => console.log("An error has occured, this is the messsage:", error)) // this is just to catch any errors for future me

//    for (var GRIFFIN_FEATHER in data) {
//        console.log(GRIFFIN_FEATHER)
//    }