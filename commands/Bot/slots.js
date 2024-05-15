require('dotenv').config();
const { Slots } = require('discord-gamecord');


module.exports = {
    name: "slots",
    aliases: ["slot"],
    category: "Bot",
    description: "Jogo de slots do bot",
    ownerOnly: false,
    run: async (interaction, message) => {
        const msg = await message.channel.send(`O slot não está funcionando no momento... Sinto muito`);
        // // const Game = new Slots({
        // //    message: interaction,
        // //    isSlashGame: false,
        // //    embed: {
        // //    title: 'Slot Machine',
        // //    color: '#00c7fe'
        // //    },
        // // })
        // // slots: ['🍇','🍊','🍌','🍋']

        // // Game.startGame();
        // // Game.on('gameOver', result =>{
        // //     return;
        // // })

        // // await message.reply({ embeds: [Game], allowedMentions: { repliedUser: false } });
        // msg.delete();
    },
};
