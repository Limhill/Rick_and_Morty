import React from 'react';
import Link from 'components/atoms/Link';
import { Pages } from 'core/enums';
import CenteredContent from 'components/templates/CenteredContent';
import DefaultTitle from 'components/atoms/DefaultTitle';
import DefaultText from 'components/atoms/DefaultText';

const AboutUs = () => {
  return (
    <CenteredContent>
      <DefaultTitle>About us</DefaultTitle>
      <DefaultText>This is an about us page</DefaultText>
      <Link to={Pages.main} marginTop={20}>
        Bring me home!
      </Link>
    </CenteredContent>
  );
};

export default AboutUs;
