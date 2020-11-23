import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { textAnim, textAnimLeft } from '../animation';
import { useScroll } from '../useScroll';

import { AboutSection, AboutText, ProgrammerSection, ProgrammerText } from '../styles/styles'

import IconsSection from './IconsSection';
import { cursorPrimary, cursorWhite } from '../cursorAnimation';


const AboutMe = () => {

  const { scrollYProgress } = useViewportScroll()
  const yAnim = useTransform(scrollYProgress, [0, 1], [300, -1000]);
  const reverseYAnim = useTransform(scrollYProgress, [0, 1], [-400, 200]);
  const [aboutText, controls] = useScroll();
  const [programmerText, progControls] = useScroll();

  return (
    <>
      <AboutSection
      onMouseEnter={cursorPrimary}
      id="about-me"
      >
        <motion.h2 style={{ y: yAnim }}>From producer...</motion.h2>
        <AboutText>
          <motion.p ref={aboutText} variants={textAnim} initial='hidden' animate={controls}>After studying jazz in prestigious music schools</motion.p>
          <motion.p ref={aboutText} variants={textAnim} initial='hidden' animate={controls}>I became a producer/composer/arranger</motion.p>
          <motion.p ref={aboutText} variants={textAnim} initial='hidden' animate={controls}>and worked with many different genres.</motion.p>
        </AboutText>
      </AboutSection>
      <ProgrammerSection
      onMouseEnter={cursorWhite}>
        <motion.h2 style={{ y: reverseYAnim }}>... to programmer</motion.h2>
        <ProgrammerText>
          <motion.p ref={programmerText} variants={textAnimLeft} initial='hidden' animate={progControls}>But now I'm ready for a new challenge.</motion.p>
          <motion.p ref={programmerText} variants={textAnimLeft} initial='hidden' animate={progControls}>I'm currently studying web development at the Wild Code School in Biarritz</motion.p>
          <motion.p ref={programmerText} variants={textAnimLeft} initial='hidden' animate={progControls}>and I'm looking forward to working on new projects!</motion.p>
        </ProgrammerText>
      </ProgrammerSection>
      <IconsSection />
    </>
  );
}

export default AboutMe;