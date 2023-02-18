const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("queue check")
		.setDescription("gets the number of people currently in the queue")
        .addBooleanOption (option =>
            option.setName("showNames")
                .setDescription ("also show the names of everyone in queue")),
	async execute(interaction) {
		return interaction.reply('Pong!');
	},
};