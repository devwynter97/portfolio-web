import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
     <LeftSection>
        <SectionTitle main center>
          Hello there,<br/>
          Welcome to my Profile
        </SectionTitle>

        <SectionText>
          Working on portfolio website
        </SectionText>
        <Button onClick={() => window.location = 'https://www.google.com'}> Curious?</Button>
     </LeftSection>
  </Section>
);

export default Hero;