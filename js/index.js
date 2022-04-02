const Discord = require('discord.js');

// Define "require"
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//gets the bot token code from a different file, so this repo can be uploaded to github
let botTokenFile = require('../botToken.json');
let botToken = botTokenFile["botToken"]

const client = new Discord.Client();

client.once('ready', () => {
    console.log('aye rub is online')
});

client.login(botToken);