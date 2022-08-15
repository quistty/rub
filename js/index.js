// Defining stuff and starting Discord.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);
let botTokenFile = require("../botToken.json");
let botToken = botTokenFile["botToken"];
import fetch from "node-fetch";
import prompt from "prompt";
prompt.start();
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";


// BOT ON

client.once("ready", () => {
  console.log("aye rub is online");
});

var caneAmount, caneBuyInfo, caneSellInfo, caneAmount, caneSellInfoRounded;

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send(`🏓Ping is ${client.ws.ping} ms`);
  }

  if (command === "pong") {
    message.channel.send("ping!");
  }
  if (command === "caneprice") {
    fetch(`https://api.hypixel.net/skyblock/bazaar`)
      .then((response) => response.json())
      .then((data) => {
        //importing all the data from the hypixel api and turning it into variables we can use
        let caneSellInfo =
          data.products.ENCHANTED_SUGAR_CANE.quick_status.buyPrice;
        let caneBuyInfo =
          data.products.ENCHANTED_SUGAR_CANE.quick_status.sellPrice;
        let caneSellInfoRounded = Math.round(caneSellInfo);
        let caneBuyInfoRounded = Math.round(caneBuyInfo);
        message.channel.send(
          `You can sell sugar cane for ${caneSellInfoRounded} and buy it for ${caneBuyInfoRounded}`
        );
      })
      .catch((error) =>
        console.log("An error has occured, this is the messsage:", error)
      );
  }
  if (command === "cane") {
    fetch(`https://api.hypixel.net/skyblock/bazaar`)
      .then((response) => response.json())
      .then((data) => {
        //importing all the data from the hypixel api and turning it into variables we can use
        let caneSellInfo =
          data.products.ENCHANTED_SUGAR_CANE.quick_status.buyPrice;
        let caneBuyInfo =
          data.products.ENCHANTED_SUGAR_CANE.quick_status.sellPrice;
        let caneSellInfoRounded = Math.round(caneSellInfo);
        let caneBuyInfoRounded = Math.round(caneBuyInfo);
        message.reply("How much enchanted sugar cane have you bought?");
        message.channel
          .awaitMessages((m) => m.author === message.author, { max: 1 })
          .then((message) => {
            message = message.first();
            var caneAmount = parseInt(message);
            console.log(`${message.author} has ${caneAmount} cane`);
            message.channel.send(
              `${message.author}, you could sell your cane for ${
                caneSellInfoRounded * caneAmount
              } coins.`
            );
            if (caneSellInfoRounded > caneBuyInfoRounded) {
              message.channel.send(
                `Did you know that you can flip cane? You would make ${
                  caneSellInfoRounded - caneBuyInfoRounded
                } per piece.`
              );
            }
          });
      })
      .catch((error) =>
        console.log("An error has occured, this is the messsage:", error)
      );
  }
});

client.login(botToken);
