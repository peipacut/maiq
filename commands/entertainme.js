const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("entertain me")
		.setDescription("keeps you distracted while waiting probably"),
	async execute(interaction) {
		return interaction.reply('Pong!');
	},
};