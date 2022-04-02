const Discord = require('discord.js');

let botTokenFile = require('../botToken.json');
let botToken = botTokenFile["botToken"]

const client = new Discord.Client();

client.once('ready', () => {
    console.log('aye rub is online')
});

client.login(botToken);