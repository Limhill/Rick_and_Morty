import { render, screen } from '@testing-library/react';
import React from 'react';
import { CharacterGender, CharacterStatus } from 'core/enums';
import Modal from './Modal';

describe('Modal', () => {
  it('should render if isOpen prop === true', () => {
    render(
      <Modal
        isOpen={true}
        handler={jest.fn}
        name={''}
        status={CharacterStatus.alive}
        species={''}
        type={''}
        gender={CharacterGender.unknown}
        origin={{ name: '', url: '' }}
        location={{ name: '', url: '' }}
        image={''}
        created={''}
      />
    );
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
  it('should not render if isOpenProp === false', () => {
    render(
      <Modal
        isOpen={false}
        handler={jest.fn}
        name={''}
        status={CharacterStatus.alive}
        species={''}
        type={''}
        gender={CharacterGender.unknown}
        origin={{ name: '', url: '' }}
        location={{ name: '', url: '' }}
        image={''}
        created={''}
      />
    );
    expect(screen.queryByTestId('overlay')).toBeNull();
    expect(screen.queryByTestId('modal')).toBeNull();
  });
});
