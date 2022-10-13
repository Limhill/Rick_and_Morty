import React from 'react';
import CenteredContent from 'components/templates/CenteredContent';
import DefaultText from 'components/atoms/DefaultText';
import PageTitle from 'components/atoms/PageTitle';
import Header from 'components/templates/Header';

const PageNotFound = () => {
  return (
    <>
      <Header />
      <CenteredContent>
        <PageTitle>Page not found</PageTitle>
        <DefaultText>We are sorry, we could not find the page you requested.</DefaultText>
      </CenteredContent>
    </>
  );
};

export default PageNotFound;
