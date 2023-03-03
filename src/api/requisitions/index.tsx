import axios from "axios";
export const fetchPokemons = async () => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=50"
  );
  return data;
};
