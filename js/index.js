// Define "require" and Discord.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);

//gets the bot token code from a different file, so this repo can be uploaded to github
let botTokenFile = require('../botToken.json');
let botToken = botTokenFile["botToken"]

//allows us to use fetch. The old way does not work anymore
import fetch from "node-fetch"; 
import prompt from "prompt";

//imports the apikey and stuff
//const fetch = require('node-fetch');
//let apiFile = require('../apiKey.json');
//let apiKey = apiFile["API_KEY"]

prompt.start(); //starting prompt

//importing discord stuff
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';


//                              code starts beneath

fetch(`https://api.hypixel.net/skyblock/bazaar`) 
    .then(response => response.json())
    .then(data => {
        //importing all the data from the hypixel api and turning it into variables we can use
       let griffinInfo = data.products.GRIFFIN_FEATHER.quick_status.buyPrice
       let griffinInfoRounded = Math.round(griffinInfo)
        console.log("Non-rounded Griffin Feather prices =", griffinInfo)
        console.log("Rounded Griffin feather prices =", griffinInfoRounded)

        //asking and calculating how much profit you would make by selling at the current market rate
        var griffinAmount = "875"
        console.log(griffinInfoRounded *= griffinAmount)
    })
    .catch(error => console.log("An error has occured, this is the messsage:", error)) // this is just to catch any errors




client.once('ready', () => {
    console.log('aye rub is online')
});



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!')
    }
    if(command === 'pong'){
        message.channel.send('ping!')
    }
    if(command === 'griffin'){
        message.reply(
            'How many griffin feathers have you bought or plan to buy?'
           );
           
           // await the next message sent (in that channel) by the message author
           message.channel
            .awaitMessages((m) => m.author === message.author, { max: 1 })
            .then((collected) => {
                var griffinAmount = collected
                message.reply(
                    griffinInfoRounded *= griffinAmount
                );
            });
    }


});




client.login(botToken);