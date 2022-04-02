// Define "require" and Discord.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Discord = require('discord.js');
module.exports = {
    name: 'pong',
    description: 'this command tells you your ping!',
    execute(message, args){
        message.channel.send('ping')
    }
}