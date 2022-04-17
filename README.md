# Griffin-Feather-Bot
A discord bot that will calculate how much money you would make by selling griffin feathers at the current margins. 

how to set this up on your own discord
first you want to go to [node.js](https://nodejs.org/en/) and download the one reccomended for most users.
After downloading it you want to run the exe file and install node. once installed you must clone this project into a folder of your choice on your pc
following this you want to open this folder in cmd or in vs code. then you run the code npm install, you should see about 40 packets installed. Now you want to create a file inside of the folder that you cloned this project into. It should be named `botToken.json`. Now you want to put the following code in the file. 
```
{
    "botToken": "replace-this-text-but-keep-the-quotation-marks"
}
```
If you haven't done so already you want to make a discord bot by going to `https://discord.com/developers/applications`. click new application on the top right corner. name it something you wont be ashamed of (this will be the name of your discord bot). click bot on the left side of the screen. then click add bot. now you can customize the bots profile picture, name (if you changed it to something you're ashamed of). reset the token and replace `placeholder text` in the botToken.json file with it. Note: do not share this token with anyone. If someone has this token code they can change the code of your bot to do whatever they'd like. If someone has access to it, please reset this code and change the code in the json file. Once this is all done you want to add the bot to your discord server. After this you want to head on over to `https://discordapi.com/permissions.html`. Then click admin on the bottom right corner. go back to the discord developer portal and click general information on the sidebar. scroll down to application id and click copy, then paste it in the client id box on the permissions calculator. Copy that link and use it to add your bot to a server of your choice. go back into vs code and open the terminal. type in `cd js`. Then type `node .` Your bot should be alive now!

# This code will be formatted in an easier way to read later.
