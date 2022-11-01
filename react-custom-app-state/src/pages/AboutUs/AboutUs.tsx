import React from 'react';
import CenteredContent from 'components/atoms/CenteredContent';
import DefaultText from 'components/atoms/DefaultText';
import PageTitle from 'components/atoms/PageTitle';
import Header from 'components/templates/Header';

const AboutUs = () => {
  return (
    <>
      <Header />
      <CenteredContent>
        <PageTitle>About us</PageTitle>
        <DefaultText>This is an about us page</DefaultText>
      </CenteredContent>
    </>
  );
};

export default AboutUs;
