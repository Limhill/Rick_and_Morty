import React from 'react';
import styled from 'styled-components';
import { DetailedInfoProps } from 'core/interfaces/props';
import List from 'components/atoms/List';
import DefaultText from 'components/atoms/DefaultText';

const StyledImage = styled.img`
  width: 45rem;
  height: 45rem;
  margin-top: 2rem;
  box-sizing: border-box;
`;

const CharacterInformation = ({ character }: DetailedInfoProps) => {
  const { name, status, species, image, created, gender, origin, location, type } = character;
  return (
    <>
      <StyledImage src={image} alt={name} />
      <List>
        <DefaultText>
          <b>Name:</b> {name}
        </DefaultText>
        <DefaultText>
          <b>Status:</b> {status}
        </DefaultText>
        <DefaultText>
          <b>Species:</b> {species}
        </DefaultText>
        {type && (
          <DefaultText>
            <b>Type:</b> {type}
          </DefaultText>
        )}
        <DefaultText>
          <b>Gender:</b> {gender}
        </DefaultText>
        <DefaultText>
          <b>Origin:</b> {origin.name}
        </DefaultText>
        <DefaultText>
          <b>Location:</b> {location.name}
        </DefaultText>
        <DefaultText>
          <b>Created:</b> {new Date(created).toLocaleDateString()}
        </DefaultText>
      </List>
    </>
  );
};

export default CharacterInformation;
