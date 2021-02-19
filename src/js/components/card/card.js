import React from "react";
import { NavLink as Link } from "react-router-dom";

const Card = ({ name, id }) => {
  return (
    <Link to={`pokemon/${name}`} className="card">
      <img
        className="card__img"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <div className="card__name">{name}</div>
    </Link>
  );
};

export default Card;
