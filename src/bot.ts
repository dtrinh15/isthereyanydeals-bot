import { Client } from "discord.js"
import config from "./config"
import * as commandModules from "./commands"
export const client = new Client({intents: ["Guilds", "GuildMessages", "DirectMessages"]})

const commands = Object(commandModules)

client.once("ready", () => {
    console.log("Discord bot online.");
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()){
        return
    }
    const { commandName } = interaction;
    commands[commandName].execute(interaction,client)
})

client.login(config.DISCORD_TOKEN)