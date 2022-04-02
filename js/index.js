// Define "require" and Discord.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//gets the bot token code from a different file, so this repo can be uploaded to github
let botTokenFile = require('../botToken.json');
let botToken = botTokenFile["botToken"]

//importing discord stuff
const Discord = require('discord.js');

const client = new Discord.Client();

//start coding underneath here

const prefix = '!';





client.once('ready', () => {
    console.log('aye rub is online')
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "yams' pp is horny and i hate the discord devs",  //The message shown
            type: "PLAYING", //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
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


});

client.login(botToken);