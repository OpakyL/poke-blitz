import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { usePokemon } from "../../../hooks/pokemon-hook";
import Loader from "../../../components/loader";

const PokemonInfo = () => {
  const [currentPokemon, setCurrentPokemon] = useState();
  const { fetchPokemon } = usePokemon();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      setCurrentPokemon(
        await fetchPokemon(history.location.pathname.split("/")[2])
      );
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      {(currentPokemon && (
        <div className="pokemonInfo">
          <h2 className="pokemonInfo__name">{currentPokemon.name}</h2>
          <div className="pokemonInfo__images">
            <img src={currentPokemon.sprites.front_default} alt="Front" />
            <img src={currentPokemon.sprites.back_default} alt="Back" />
          </div>
          <div className="pokemonInfo__text">
            <div className="pokemonInfo__overall">
              <h3>Overall:</h3>
              <p>
                {currentPokemon.is_default
                  ? "Can be obtained by default"
                  : "Can't be obtained by default"}
              </p>
              <p>Type: {currentPokemon.types[0].type.name}</p>
              <p>Height: {currentPokemon.height}</p>
              <p>Weight: {currentPokemon.weight}</p>
            </div>
            <div className="pokemonInfo__stats">
              <h3>Stats:</h3>
              {currentPokemon.stats.map((el) => (
                <p key={el.stat.name}>
                  {el.stat.name} : {el.base_stat}
                </p>
              ))}
            </div>
          </div>
          <div className="pokemonInfo__skills">
            <h3>Skills:</h3>
            {currentPokemon.moves.map((el, index) => (
              <span key={el.move.name}>
                {el.move.name}
                {index !== currentPokemon.moves.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
        </div>
      )) || <Loader />}
    </div>
  );
};

export default PokemonInfo;
