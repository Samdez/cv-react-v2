
import {motion} from 'framer-motion';
import {skillsAnimation} from '../animation';
import { SkillsSection } from '../styles/styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';

const Skills = () => {
  return (
    <SkillsSection>
      <div>
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO' rel="noreferrer" target="_blank" ><button>See my portfolio</button></a>
      </div>
      <div className="skills-sub-section">
        <h2>My skills</h2>
      </div>
      <AnimateSharedLayout>
      <div className="skills-sub-section">
        <Toggle title='Programming languages and frameworks/libraries'>
          <motion.p variants={skillsAnimation} initial='hidden' animate='show' exit='exit' className="skill-content">I studied Javascript, React, and NodeJS.</motion.p>
        </Toggle>
      </div>
      <div className="skills-sub-section">
        <Toggle title='Soft Skills'>
          <motion.div variants={skillsAnimation} initial='hidden' animate='show' exit='exit'>
            <motion.p variants={skillsAnimation}  className="skill-content">During my training, I worked on several projects using the AGILE methodology.</motion.p>
            <motion.p variants={skillsAnimation}  className="skill-content">I've worked as a solo artist and in different professional bands,</motion.p>
            <motion.p variants={skillsAnimation}  className="skill-content">which taught me how to balance independent work and teamwork.</motion.p>
          </motion.div>
        </Toggle>
      </div>
      <div className="skills-sub-section">
        <Toggle title="Miscellaneous">
        <motion.div variants={skillsAnimation} initial='hidden' animate='show' exit='exit' className="skill-content">
          <motion.p variants={skillsAnimation}>I speak french, english and spanish</motion.p>
          <motion.p variants={skillsAnimation}>I'm willing to work on remote or to move for short to mid-terms missions.</motion.p>
        </motion.div>
        </Toggle>
      </div>
      </AnimateSharedLayout>
      <div></div>
    </SkillsSection>
  );
}



export default Skills;