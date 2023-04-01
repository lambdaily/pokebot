const axios = require("axios");

async function getRandomPokemon() {
  try {
    const id = Math.floor(Math.random() * 898) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await axios.get(url);

    return {
      name: response.data.name,
      id: response.data.id,
      type: response.data.types[0].type.name,
    };
  } catch (error) {
    throw error;
  }
}

module.exports = { getRandomPokemon };
