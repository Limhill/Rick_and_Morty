import React from 'react';
import Content from 'components/templates/Content';
import PageTitle from 'components/atoms/PageTitle';
import Form from 'components/organisms/Form';
import CardsContainer from 'components/organisms/CardsContainer';
import { CreatePageState } from 'core/interfaces/states';
import { DoubleSideCardProps } from 'core/interfaces/props';
import DoubleSideCard from 'components/organisms/DoubleSideCard';
import Header from 'components/templates/Header';

class Create extends React.Component<unknown, CreatePageState> {
  constructor(props: unknown) {
    super(props);
    this.state = { cards: [] };
  }

  createCards = ({ name, birthday, status, species, gender, image }: DoubleSideCardProps) => {
    this.setState({
      cards: [...this.state.cards, { name, birthday, status, species, gender, image }],
    });
  };

  render() {
    return (
      <>
        <Header />
        <Content>
          <PageTitle>Create your own character!</PageTitle>
          <Form handler={this.createCards} />
          <CardsContainer>
            {this.state.cards.map((card) => {
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
  }
}

export default Create;
