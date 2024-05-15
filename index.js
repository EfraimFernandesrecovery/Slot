require('dotenv').config();

const { Client, Collection, Partials, GatewayIntentBits, IntentsBitField} = require('discord.js');
const handler = require("./handler/index");
const myIntents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildEmojisAndStickers,
  GatewayIntentBits.GuildIntegrations,
  GatewayIntentBits.GuildWebhooks,
  GatewayIntentBits.GuildInvites,
  GatewayIntentBits.GuildVoiceStates,
  GatewayIntentBits.GuildPresences,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.GuildMessageTyping,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.DirectMessageReactions,
  GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.MessageContent,
  IntentsBitField.Flags.Guilds,
  IntentsBitField.Flags.GuildMembers,
  IntentsBitField.Flags.GuildMessages,
  IntentsBitField.Flags.MessageContent,
]

const myPartials = [
  Partials.Channel,
  Partials.Message,
  Partials.Reaction
]
const client = new Client({
  partials: myPartials,
  intents: myIntents
});

const Discord = require('discord.js');
require('dotenv').config()


const { Slots } = require('discord-gamecord');


module.exports = client;

client.discord = Discord;
client.commands = new Collection();
client.slash = new Collection();
client.config = require('./config')

// Carregar comando e eventos
handler.loadEvents(client);
handler.loadCommands(client);
handler.loadSlashCommands(client);

// Erro no Handling

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception: " + err);
});
  
process.on("unhandledRejection", (reason, promise) => {
    console.log("[GRAVE] Rejeição possivelmente não tratada em: Promise ", promise, " motivo: ", reason.message);
});

client.login(process.env.TOKEN);