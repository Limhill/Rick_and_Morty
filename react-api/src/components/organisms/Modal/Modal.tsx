import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ModalProps } from 'core/interfaces/props';
import ListItem from 'components/atoms/ListItem';
import { Color } from 'core/enums';

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

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3rem 3rem 0 0;
`;

class Modal extends React.Component<ModalProps, unknown> {
  constructor(props: ModalProps) {
    super(props);
  }

  render() {
    if (!this.props.isOpen) return null;
    return ReactDOM.createPortal(
      <Overlay onClick={this.props.handler}>
        <ModalWindow>
          <Image src={this.props.image} alt={this.props.name} />
          <List>
            <ListItem>
              <b>Name:</b> {this.props.name}
            </ListItem>
            <ListItem>
              <b>Status:</b> {this.props.status}
            </ListItem>
            <ListItem>
              <b>Species:</b> {this.props.species}
            </ListItem>
            {this.props.type && (
              <ListItem>
                <b>Type:</b> {this.props.type}
              </ListItem>
            )}
            <ListItem>
              <b>Gender:</b> {this.props.gender}
            </ListItem>
            <ListItem>
              <b>Origin:</b> {this.props.origin.name}
            </ListItem>
            <ListItem>
              <b>Location:</b> {this.props.location.name}
            </ListItem>
            <ListItem>
              <b>Created:</b> {new Date(this.props.created).toLocaleDateString()}
            </ListItem>
          </List>
        </ModalWindow>
        <GlobalStyle />
      </Overlay>,
      document.body
    );
  }
}

export default Modal;
