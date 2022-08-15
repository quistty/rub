# Bazzar-items-Bot

A discord bot that will calculate how much money you would make by selling griffin feathers at the current margins.

# Installing the code on your computer

First you need to install [node.js](https://nodejs.org/en/) if you haven't already done so. Tutorials on how to do so can be found online. Once installed you must clone this project. If you're interested in editing the bot for your own use [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the project. If you'd like to contribute to the original bot you can make a pull request and we'll review your code.
Now lets open the file directory in cmd. Run `npm install`, you should see about 40 packets installed. Now you want to create a file inside of the folder that you cloned this project into. It should be named `botToken.json`. This file is used to hold our discord bot token. Now you want to put the following code in the file.

```
{
    "botToken": "replace-this-text-but-keep-the-quotation-marks"
}
```

If you haven't done so already you want to make a discord bot by going to `https://discord.com/developers/applications`. Click new application on the top right corner. Name it something you wont be ashamed of (this will be the name of your discord bot). Click bot on the left side of the screen. Then click add bot. Now you can customize the bots profile picture, name (if you changed it to something you're ashamed of). Reset the token and replace the placeholder text in your json file with the bot token from discord's website. Note: DO NOT SHARE THIS TOKEN WITH ANYONE. If someone has this token, they can change the code of your bot to do whatever they'd like. If someone has access to it, please reset this code and change the code in the json file. Once this is all done you want to add the bot to your discord server. After this you want to head on over to `https://discordapi.com/permissions.html`. Then click admin on the bottom right corner. Go back to the discord developer portal and click general information on the sidebar. Scroll down to application id and click copy, then paste it in the client id box on the permissions calculator. Copy that link and use it to add your bot to a server of your choice. Go back into vs code and open the terminal. type in `cd js`. Then type `node .` Your bot should be alive now!

# Bot commands

The commands for the bot are the following

- !cane (used to find the current margins for enchanted sugar cane)

# Current version

v1.0
