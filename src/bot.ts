import { Client } from "discord.js"
import config from "./config"

export const client = new Client({intents: ["Guilds", "GuildMessages", "DirectMessages"]})

client.once("ready", () => {
    console.log("Discord bot online.");
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()){
        return
    }
    const { commandName } = interaction;
    if(commandName == 'ping'){
        interaction.reply("pong")
    }
})

client.login(config.DISCORD_TOKEN)