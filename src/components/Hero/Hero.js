import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Dimas's Portofolio
      </SectionTitle>
      <SectionText>
        I have been around the software engineering field for more than 3 years and handled various projects with various scale
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/dimas-septyanto/', '_blank')}>Let's connect</Button>
    </LeftSection>
  </Section>
);

export default Hero;