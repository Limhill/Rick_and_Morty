import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ModalProps } from 'core/interfaces/props';

const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 1);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWindow = styled.div`
  width: 45rem;
  height: 45rem;
  z-index: 2;
  background: white;
`;

class Modal extends React.Component<ModalProps, unknown> {
  constructor(props: ModalProps) {
    super(props);
  }

  render() {
    if (!this.props.isOpen) return null;
    return ReactDOM.createPortal(
      <Overlay onClick={this.props.handler}>
        <ModalWindow>This is a test text here</ModalWindow>
      </Overlay>,
      document.body
    );
  }
}

export default Modal;
