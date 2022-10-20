import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ModalProps, ModalWindowImageProps } from 'core/interfaces/props';
import ListItem from 'components/atoms/ListItem';
import { Color } from 'core/enums';
import CloseIcon from 'components/atoms/CloseIcon';

const Overlay = styled.section`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  body {
    overflow: hidden;
  }
`;

const ModalWindow = styled.div`
  width: 36rem;
  z-index: 2;
  background: ${Color.cardBackground};
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const List = styled.ul`
  list-style: none;
  white-space: break-spaces;
  padding: 0 1rem;
`;

const Image = styled.div<ModalWindowImageProps>`
  width: 100%;
  height: 30rem;
  border-radius: 3rem 3rem 0 0;
  background-image: url(${({ imagePath }) => imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Modal = ({
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  created,
  handler,
  isOpen,
}: ModalProps) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Overlay onClick={handler} data-testid="overlay">
      <ModalWindow data-testid="modal">
        <Image imagePath={image}>
          <CloseIcon handler={handler} />
        </Image>
        <List>
          <ListItem>
            <b>Name:</b> {name}
          </ListItem>
          <ListItem>
            <b>Status:</b> {status}
          </ListItem>
          <ListItem>
            <b>Species:</b> {species}
          </ListItem>
          {type && (
            <ListItem>
              <b>Type:</b> {type}
            </ListItem>
          )}
          <ListItem>
            <b>Gender:</b> {gender}
          </ListItem>
          <ListItem>
            <b>Origin:</b> {origin.name}
          </ListItem>
          <ListItem>
            <b>Location:</b> {location.name}
          </ListItem>
          <ListItem>
            <b>Created:</b> {new Date(created).toLocaleDateString()}
          </ListItem>
        </List>
      </ModalWindow>
      <GlobalStyle />
    </Overlay>,
    document.body
  );
};

export default Modal;
