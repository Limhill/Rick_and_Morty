import { render, screen } from '@testing-library/react';
import React from 'react';
import { CardInfo } from 'core/interfaces';
import { characters } from 'mock-data/characters';
import { CharacterGender, CharacterStatus } from 'core/enums';
import Card from './index';

describe('test Card component', () => {
  const { id, name, status, species, type, gender, origin, location, image }: CardInfo =
    characters[3] as CardInfo;
  beforeEach(() =>
    render(
      <Card
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
    )
  );
  test('test card fields', () => {
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Status:')).toBeInTheDocument();
    expect(screen.getByText('Species:')).toBeInTheDocument();
    expect(screen.queryByText('Type:')).toBeNull();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
    expect(screen.getByText('Origin:')).toBeInTheDocument();
    expect(screen.getByText('Location:')).toBeInTheDocument();
  });
  test('card values', () => {
    expect(screen.getAllByText(name)).toHaveLength(2);
    expect(screen.getByText(status)).toHaveTextContent(CharacterStatus.alive);
    expect(screen.getByText(species)).toHaveTextContent('Human');
    expect(screen.getByText(gender)).toHaveTextContent(CharacterGender.female);
    expect(origin.name).toStrictEqual(location.name);
    expect(screen.getAllByText(origin.name)).toHaveLength(2);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
