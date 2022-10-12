import React from 'react';
import styled from 'styled-components';
import Link from 'components/atoms/Link';
import { Pages, Color } from 'core/enums';

const HeaderContainer = styled.section`
  width: 100%;
  padding: 3rem 6rem;
  background: ${Color.black};
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  flex: 0;
  z-index: 1;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={Pages.main} data-testid="main-page-link">
        Main page
      </Link>
      <Link to={Pages.create} data-testid="create-page-link">
        Create character
      </Link>
      <Link to={Pages.aboutUs} data-testid="about-us-page-link">
        About us
      </Link>
    </HeaderContainer>
  );
};

export default Header;
