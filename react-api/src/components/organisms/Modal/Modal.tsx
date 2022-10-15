import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ModalProps } from 'core/interfaces/props';

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
  width: 45rem;
  height: 45rem;
  z-index: 2;
  background: white;
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
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
          <p>{this.props.name}</p>
          <p>{this.props.species}</p>
        </ModalWindow>
        <GlobalStyle />
      </Overlay>,
      document.body
    );
  }
}

export default Modal;
