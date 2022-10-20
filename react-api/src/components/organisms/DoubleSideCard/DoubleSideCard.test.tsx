import { render, screen } from '@testing-library/react';
import React from 'react';
import { CharacterStatus } from 'core/enums';
import DoubleSideCard from 'components/organisms/DoubleSideCard';

describe('Double side card', () => {
  const image = new File(['hello'], 'hello.jpg', { type: 'image/png' });
  global.URL.createObjectURL = jest.fn();
  beforeEach(() =>
    render(
      <DoubleSideCard
        name={'TestName'}
        birthday={''}
        status={CharacterStatus.alive}
        species={true}
        gender={true}
        image={image}
      />
    )
  );
  it('should have correct fields', () => {
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Birthday:')).toBeInTheDocument();
    expect(screen.getByText('Status:')).toBeInTheDocument();
    expect(screen.getByText('Species:')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
  });
  it('should have correct values', () => {
    expect(screen.getAllByText(/TestName/i)).toHaveLength(2);
    expect(screen.getByText(/alive/i)).toBeInTheDocument();
    expect(screen.getByText(/human/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
