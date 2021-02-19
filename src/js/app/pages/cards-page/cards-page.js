import React, { useEffect, useState } from "react";
import Card from "../../../components/card";
import Pagination from "../../../components/pagination";
import Loader from "../../../components/loader";
import { extractIdFromUrl } from "../../../utils/";
import { usePokemon } from "../../../hooks/pokemon-hook";

const CardsPage = () => {
  const [pokemonList, setPokemonList] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const { fetchPokemonList } = usePokemon();

  useEffect(() => {
    (async () => {
      setPokemonList(null);
      setPokemonList(await fetchPokemonList(currentPage * 6));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className="page">
      <div className="cardsPage">
        {(pokemonList &&
          pokemonList.map((el) => (
            <Card
              name={el.name}
              id={extractIdFromUrl(el.url)}
              key={extractIdFromUrl(el.url)}
            />
          ))) || <Loader />}
      </div>

      <Pagination
        pages={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CardsPage;
