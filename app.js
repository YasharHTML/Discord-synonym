const Discord = require("discord.js");
const config = require("./config.json");
const synonymsArray = require('synonyms-array');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("messageCreate", async function (message) {
    if (message.content.startsWith("$synbot")) {
        console.log(message.content.slice(8))
        if (synonymsArray.get(message.content.slice(8)).length != 0) {
            x = ""
            synonymsArray.get(message.content.slice(8)).forEach(element => {
                x += element + ";";
            });
            if (x < 2000) {
                message.reply(x);
            } else {
                message.reply(x.slice(0, 2000))
            }
        }
    }
});

client.login(config.BOT_TOKEN);
