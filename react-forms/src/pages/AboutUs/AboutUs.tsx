import React from 'react';
import Link from 'components/atoms/Link';
import { Pages } from 'core/enums';
import CenteredContent from 'components/templates/CenteredContent';
import DefaultText from 'components/atoms/DefaultText';
import PageTitle from 'components/atoms/PageTitle';

const AboutUs = () => {
  return (
    <CenteredContent>
      <PageTitle>About us</PageTitle>
      <DefaultText>This is an about us page</DefaultText>
      <Link to={Pages.main} marginTop={20}>
        Bring me home!
      </Link>
    </CenteredContent>
  );
};

export default AboutUs;
