import React from 'react';
import { DetailedInfoProps } from 'core/interfaces/props';
import List from 'components/atoms/List';
import DefaultText from 'components/atoms/DefaultText';

const DetailedInfo = ({ character }: DetailedInfoProps) => {
  const { name, status, species, image, created, gender, origin, location, type } = character;
  return (
    <>
      <h1>{name}</h1>
      <img src={image} alt={name} />
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

export default DetailedInfo;
