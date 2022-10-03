import React from 'react';
import Link from 'components/atoms/Link';
import { Pages } from 'core/enums';
import CenteredContent from 'components/templates/CenteredContent';
import DefaultText from 'components/atoms/DefaultText';
import PageTitle from 'components/atoms/PageTitle';

const PageNotFound = () => {
  return (
    <CenteredContent>
      <PageTitle>Page not found</PageTitle>
      <DefaultText>We are sorry, we could not find the page you requested.</DefaultText>
      <Link to={Pages.main} marginTop={20}>
        Back to home
      </Link>
    </CenteredContent>
  );
};

export default PageNotFound;
