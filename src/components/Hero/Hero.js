import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Greetings!<br />
        Welcome to My Portofolio
      </SectionTitle>
      <SectionText>
        I enjoy building things related to web and mobile development. I have been doing it for more than 3 years and involved in various numbers of projects with various scale.
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/dimas-septyanto/', '_blank')}>Let's connect</Button>
    </LeftSection>
  </Section>
);

export default Hero;