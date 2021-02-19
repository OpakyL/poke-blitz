import { useHttp } from "./http-hook";

export const usePokemon = () => {
  const { request } = useHttp();

  const fetchPokemonList = (offset = 0, limit = 6) => {
    return new Promise((resolve) => {
      request(`/pokemon?limit=${limit}&offset=${offset}`)
        .then((response) => resolve(response.results))
        .catch((result) => {
          throw new Error(result);
        });
    });
  };

  const fetchPokemon = (name) => {
    return new Promise((resolve) => {
      request(`/pokemon/${name}`)
        .then((response) => resolve(response))
        .catch((result) => {
          throw new Error(result);
        });
    });
  };

  return { fetchPokemonList, fetchPokemon };
};
