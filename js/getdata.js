import fetch from "node-fetch"; //allows us to use fetch. The old way does not work anymore
import prompt from "prompt";
//const fetch = require('node-fetch');
//let apiFile = require('../apiKey.json');
//let apiKey = apiFile["API_KEY"]

prompt.start(); //starting prompt


fetch(`https://api.hypixel.net/skyblock/bazaar`) 
    .then(response => response.json())
    .then(data => {
        //importing all the data from the hypixel api and turning it into variables we can use
       let griffinInfo = data.products.GRIFFIN_FEATHER.quick_status.buyPrice
       let griffinInfoRounded = Math.round(griffinInfo)
        console.log("Non-rounded Griffin Feather prices =", griffinInfo)
        console.log("Rounded Griffin feather prices =", griffinInfoRounded)

        //asking and calculating how much profit you would make by selling at the current market rate
        var grififnAmount = "875"
        console.log(griffinInfoRounded *= grififnAmount)
    })
    .catch(error => console.log("An error has occured, this is the messsage:", error)) // this is just to catch any errors

