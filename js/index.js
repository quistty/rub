// Define "require" and Discord.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Discord = require('discord.js');

//gets the bot token code from a different file, so this repo can be uploaded to github
let botTokenFile = require('../botToken.json');
let botToken = botTokenFile["botToken"]

const client = new Discord.Client();
const prefix = '!';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('../commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`../commands/${file}`);
    
    client.commands.set(command.name, command);
}

//start coding underneath here





client.once('ready', () => {
    console.log('aye rub is online')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'pong'){
        client.commands.get('pong').execute(message, args);
    }


});

client.login(botToken);