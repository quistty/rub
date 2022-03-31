let apiFile = require('../apiKey.json');
let apiKey = apiFile["apiKey"]

const ign = "Porsha_boy"
const playerUUID = ""   

fetch(`https://api.hypixel.net/skyblock/bazaar`) // fetching from the api
	.then(response => response.json()) // turning the info from the api from bytes to a json
	.then(data => {
		console.log(data)
	})
	.catch(error => console.log("An error has occured, this is the messsage:", error)) // this is just to catch any errors

var delayInMilliseconds = 1000;

