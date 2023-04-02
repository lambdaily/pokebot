require('dotenv').config();

const { REST, Routes} = require('discord.js');
const commands = [
  {
    name: 'ping',
    description: 'Responde con pong!'
  },
  {
    name: 'pokemon',
    description: 'Asigna un pokemon aleatorio al usuario'
  },
  {
    name: 'cambiamon',
    description: 'Cambia el pokemon asignado al usuario'
  }
];
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      // Replace GUILD_ID with your server ID
      // Replace CLIENT_ID with your bot's client ID
      // If you want to register global commands, remove GUILD_ID from the URL
      // Example: Routes.applicationCommands(CLIENT_ID)
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();