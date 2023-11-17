import { SlashCommandBuilder} from "@discordjs/builders"
import { CommandInteraction, CommandInteractionResolvedData } from "discord.js"
const { request } = require('express')

export const data = new SlashCommandBuilder()
.setName("sale")
.setDescription("Get Sale")



export async function execute(interaction: CommandInteraction){
    const sale = await request('')
    const { file } = await sale.body.json();
    return interaction.reply("Pong")
}