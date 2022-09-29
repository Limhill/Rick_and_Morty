import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CardInfo } from 'core/interfaces';
import { capitalize } from 'services/helpers';
import styles from './Card.module.scss';

const Card = ({ name, status, species, type, gender, origin, location, image }: CardInfo) => {
  const listItems = {
    name,
    status,
    species,
    type,
    gender,
    origin: origin.name,
    location: location.name,
  };
  return (
    <div className={styles.container} data-testid="card">
      <div className={styles.card}>
        <div className={styles.card__side_front}>
          <h2 className={styles.card__title}>{name}</h2>
          <img className={styles.card__image} src={image} alt={name} />
        </div>
        <div className={styles.card__side_back}>
          <ul className={styles.list}>
            {Object.keys(listItems).map((item) => {
              if (item === 'type' && !listItems[item]) return;
              return (
                <li key={uuidv4()} className={styles.list__item}>
                  <span>
                    <b>{`${capitalize(item)}:`}</b> {listItems[item as keyof typeof listItems]}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
