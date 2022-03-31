import fetch from "node-fetch";
let apiFile = require('../apiKey.json');
let apiKey = apiFile["API_KEY"]

const ign = "Porsha_boy"
const playerUUID = ""   

fetch(`https://api.hypixel.net/skyblock/bazaar`) // fetching from the api
    .then(response => response.json()) // turning the info from the api from bytes to a json
    .then(data => {
        let griffinInfo = response.json[""]
        console.log(griffinInfo)
        let apiKey
    })
    .catch(error => console.log("An error has occured, this is the messsage:", error)) // this is just to catch any errors

