import React from 'react';
import { CardInfo } from 'core/interfaces';
import './styles.css';

const Card = ({ name, status, species, type, gender, origin, location, image }: CardInfo) => {
  return (
    <div className="card">
      <h2 className="card__title">{name}</h2>
      <img className="card__image" src={image} alt={name} />
      <ul className="list">
        <li className="list__item">
          <span>
            <b>Status:</b> {status}
          </span>
        </li>
        <li className="list__item">
          <span>
            <b>Species:</b> {species}
          </span>
        </li>
        <li className="list__item">
          <span>
            <b>Type:</b> {type ? type : 'none'}
          </span>
        </li>
        <li className="list__item">
          <span>
            <b>Gender:</b> {gender}
          </span>
        </li>
        <li className="list__item">
          <span>
            <b>Origin:</b> {origin.name}
          </span>
        </li>
        <li className="list__item">
          <span>
            <b>Location:</b> {location.name}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Card;
