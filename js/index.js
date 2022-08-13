// Define "require" and Discord.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);

//gets the bot token code from a different file, so this repo can be uploaded to github
let botTokenFile = require("../botToken.json");
let botToken = botTokenFile["botToken"];

//allows us to use fetch. The old way does not work anymore
import fetch from "node-fetch";
import prompt from "prompt";

//imports the apikey and stuff
//const fetch = require('node-fetch');
//let apiFile = require('../apiKey.json');
//let apiKey = apiFile["API_KEY"]

prompt.start(); //starting prompt

//importing discord stuff
const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "!";

//                              code starts beneath

//used to turn the bot on
client.once("ready", () => {
  console.log("aye rub is online");
});

//variables that store the information about sugar cane
var caneAmount,
  caneBuyInfo,
  caneSellInfo,
  caneBuyInfoRounded,
  caneSellInfoRounded;

fetch(`https://api.hypixel.net/skyblock/bazaar`)
  .then((response) => response.json())
  .then((data) => {
    //importing all the data from the hypixel api and turning it into variables we can use

    let caneSellInfo = data.products.ENCHANTED_SUGAR_CANE.quick_status.buyPrice;
    let caneSellInfoRounded = Math.round(caneSellInfo);
    let caneBuyInfo = data.products.ENCHANTED_SUGAR_CANE.quick_status.sellPrice;
    let caneBuyInfoRounded = Math.round(caneBuyInfo);

    console.log("Buy price for enchanted sugar cane is  =", caneBuyInfoRounded);

    console.log(
      "Sell price for enchanted sugar cane is =",
      caneSellInfoRounded
    );
  })
  .catch((error) =>
    console.log("An error has occured, this is the messsage:", error)
  ); // this is just to catch any errors

//asking and calculating how much profit you would make by selling at the current market rate
//        console.log(griffinInfoRounded *= griffinAmount)

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("pong!");
  }
  if (command === "pong") {
    message.channel.send("ping!");
  }
  if (command === "cane") {
    message.reply("How much enchanted sugar cane have you bought?");
    // await the next message sent (in that channel) by the message author
    message.channel
      .awaitMessages((m) => m.author === message.author, { max: 1 })
      .then((collected) => {
        let caneAmount = 1328;
        message.reply(
          "congrats, you'd sell your cane for $",
          (caneSellInfoRounded *= caneAmount)
        );
      });
  }
});

client.login(botToken);
