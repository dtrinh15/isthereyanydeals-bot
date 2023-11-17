import { SlashCommandBuilder} from "@discordjs/builders"
import { ChatInputCommandInteraction, CommandInteraction, CommandInteractionOptionResolver, CommandInteractionResolvedData } from "discord.js"

export const data = new SlashCommandBuilder().setName("channel")
.setDescription("Changes main channel for outputs")
.addStringOption(option =>
    option.setName('input')
    .setDescription("Insert Channel Id here.")
    .setRequired(true));

    
export async function execute(interaction: ChatInputCommandInteraction){
    const input = interaction.options.getString('input');
    console.log(input);
    if(input){
        await interaction.reply(input);
    }
}