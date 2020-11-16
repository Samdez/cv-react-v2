import { motion } from 'framer-motion';
import { pageAnimation, textAnim, container } from '../animation';

import { AboutSection, AboutText, ProgrammerSection, ProgrammerText } from '../styles/styles'

import { useState } from 'react';
import IconsSection from './IconsSection';


const AboutMe = () => {





  return (
    <>
      <AboutSection>
        <h2 >From beatmaker...</h2>
        <AboutText>
          <p>After studying jazz in prestigious music schools</p>
          <p>I became a producer/composer/arranger</p>
          <p>and worked with many different genres.</p>
        </AboutText>
      </AboutSection>
      <ProgrammerSection>
          <h2>... to programmer</h2>
        <ProgrammerText>
          <p>But now I'm ready for a new challenge.</p>
          <p>I'm currently studying web development at the Wild Code School in Biarritz</p>
          <p>and I'm looking forward to working on new projects!</p>
        </ProgrammerText>
      </ProgrammerSection>
        <IconsSection />
    </>
  );
}

export default AboutMe;