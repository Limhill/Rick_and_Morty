// import { render, screen } from '@testing-library/react';
// import React from 'react';
// import { OneSideCardProps } from 'core/interfaces/props';
// import { characters } from '__mocks__/characters';
// import { CharacterGender, CharacterStatus } from 'core/enums';
// import TwoSideCard from 'components/organisms/TwoSideCard/index';
// import TwoSideCar
//
// describe('Card', () => {
//   const { id, name, status, species, type, gender, origin, location, image }: OneSideCardProps =
//     characters[3] as TwoSideCardProps;
//   beforeEach(() =>
//     render(
//       <TwoSideCard
//         id={id}
//         name={name}
//         status={status}
//         species={species}
//         type={type}
//         gender={gender}
//         origin={origin}
//         location={location}
//         image={image}
//       />
//     )
//   );
//   it('should have correct fields', () => {
//     expect(screen.getByText('Name:')).toBeInTheDocument();
//     expect(screen.getByText('Status:')).toBeInTheDocument();
//     expect(screen.getByText('Species:')).toBeInTheDocument();
//     expect(screen.queryByText('Type:')).toBeNull();
//     expect(screen.getByText('Gender:')).toBeInTheDocument();
//     expect(screen.getByText('Origin:')).toBeInTheDocument();
//     expect(screen.getByText('Location:')).toBeInTheDocument();
//   });
//   it('should have correct values', () => {
//     expect(screen.getAllByText(name)).toHaveLength(2);
//     expect(screen.getByText(status)).toHaveTextContent(CharacterStatus.alive);
//     expect(screen.getByText(species)).toHaveTextContent('Human');
//     expect(screen.getByText(gender)).toHaveTextContent(CharacterGender.female);
//     expect(origin.name).toStrictEqual(location.name);
//     expect(screen.getAllByText(origin.name)).toHaveLength(2);
//     expect(screen.getByRole('img')).toBeInTheDocument();
//   });
// });
