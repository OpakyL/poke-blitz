import React, { useEffect, useState } from "react";
import Pagination from "../../../components/pagination";
import Loader from "../../../components/loader";
import { NavLink as Link } from "react-router-dom";
import { usePokemon } from "../../../hooks/pokemon-hook";

const ListPage = () => {
  const [pokemonList, setPokemonList] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const { fetchPokemonList } = usePokemon();

  useEffect(() => {
    (async () => {
      setPokemonList(null);
      setPokemonList(await fetchPokemonList(currentPage * 15, 15));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className="page">
      <div className="listPage">
        {(pokemonList &&
          pokemonList.map((el) => (
            <Link to={`/pokemon/${el.name}`}>{el.name}</Link>
          ))) || <Loader />}
      </div>

      <Pagination
        pages={[
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
        ]}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ListPage;
