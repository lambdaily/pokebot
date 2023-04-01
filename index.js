require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { getRandomPokemon } = require("./utils/pokeapi");

// Crear un objeto para almacenar los miembros a los que ya se les asignó un Pokémon
const assignedPokemons = new Map();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "pokemon") {
    const member = interaction.member;
    const existingPokemon = assignedPokemons.get(member.id);

    if (existingPokemon) {
      const embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setTitle("Ya tienes un Pokémon asignado")
        .setDescription(
          `Tu Pokémon asignado es **${existingPokemon.name}** (#${existingPokemon.id}), de tipo ${existingPokemon.type}.`
        )
        .setImage(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${existingPokemon.id}.png`
        );
      await interaction.reply({ embeds: [embed] });
      return;
    }

    try {
      const pokemon = await getRandomPokemon();
      assignedPokemons.set(member.id, pokemon);
      const embed = new EmbedBuilder()
        .setColor("#008000")
        .setTitle("¡Has recibido un Pokémon!")
        .setDescription(
          `Tu Pokémon asignado es **${pokemon.name}** (#${pokemon.id}), de tipo ${pokemon.type}.`
        )
        .setImage(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        );
      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
    }
  }
});

client.login(process.env.TOKEN);
