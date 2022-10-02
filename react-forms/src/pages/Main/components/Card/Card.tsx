import React from 'react';
import { CardProps } from 'core/interfaces';
import CardInfo from 'components/features/card/CardInfo';
import CardSide from 'components/features/card/CardSide';
import styles from './Card.module.scss';

const Card = ({ id, name, status, species, type, gender, origin, location, image }: CardProps) => {
  return (
    <div className={styles.container} data-testid="card">
      <div className={styles.card}>
        <CardSide>
          <h2 className={styles.card__title}>{name}</h2>
          <img className={styles.card__image} src={image} alt={name} />
        </CardSide>
        <CardSide back={true}>
          <CardInfo
            id={id}
            name={name}
            status={status}
            species={species}
            type={type}
            gender={gender}
            origin={origin}
            location={location}
            image={image}
          />
        </CardSide>
      </div>
    </div>
  );
};

export default Card;
