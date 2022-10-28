import React, { useState } from 'react';
import Content from 'components/templates/Content';
import PageTitle from 'components/atoms/PageTitle';
import Form from 'components/organisms/Form';
import CardsContainer from 'components/atoms/CardsContainer';
import { DoubleSideCardProps } from 'core/interfaces/props';
import DoubleSideCard from 'components/organisms/DoubleSideCard';
import Header from 'components/templates/Header';

const CreateCharacter = () => {
  const [cards, setCards] = useState<DoubleSideCardProps[]>([]);

  const addCard = ({ name, birthday, status, species, gender, image }: DoubleSideCardProps) => {
    setCards(cards.concat({ name, birthday, status, species, gender, image }));
  };

  return (
    <>
      <Header />
      <Content>
        <PageTitle>Create your own character!</PageTitle>
        <Form addCard={addCard} />
        <CardsContainer>
          {cards.map((card) => {
            return (
              <DoubleSideCard
                key={card.name}
                name={card.name}
                birthday={card.birthday}
                status={card.status}
                gender={card.gender}
                species={card.species}
                image={card.image}
              />
            );
          })}
        </CardsContainer>
      </Content>
    </>
  );
};

export default CreateCharacter;
