
import {motion} from 'framer-motion';
import {skillsAnimation} from '../animation';
import { SkillsSection } from '../styles/styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import { cursorPrimary } from '../cursorAnimation';

const Skills = () => {
  return (
    <SkillsSection
    onMouseEnter={cursorPrimary}
    >
      <div>
      <a href='https://cvdesignr.com/p/5fac13b6e828d' rel="noreferrer" target="_blank" ><button>See my full resume</button></a>
      </div>
      <div className="skills-sub-section">
        <h2>My skills</h2>
      </div>
      <AnimateSharedLayout>
        <div className="skills-list">
      <div className="skills-sub-section">
        <Toggle title='Programming languages and frameworks/libraries'>
          <motion.p variants={skillsAnimation} initial='hidden' animate='show' exit='exit' className="skill-content">I studied Javascript, React, and NodeJS.</motion.p>
        </Toggle>
      </div>
      <div className="skills-sub-section">
        <Toggle title='Soft Skills'>
          <motion.div variants={skillsAnimation} initial='hidden' animate='show' exit='exit' className="skill-content">
            <motion.p variants={skillsAnimation}  className="skill-content">During my training, I worked on several projects using the AGILE methodology.</motion.p>
            <motion.p variants={skillsAnimation}  className="skill-content">I have worked as a solo artist and in different professional bands,</motion.p>
            <motion.p variants={skillsAnimation}  className="skill-content">which taught me how to balance independent work and teamwork.</motion.p>
          </motion.div>
        </Toggle>
      </div>
      <div className="skills-sub-section" >
        <Toggle title="Miscellaneous">
        <motion.div variants={skillsAnimation} initial='hidden' animate='show' exit='exit' className="skill-content">
          <motion.p variants={skillsAnimation}>I speak French, English and Spanish.</motion.p>
          <motion.p variants={skillsAnimation}>I am willing to work remotely or to move for short to medium missions.</motion.p>
        </motion.div>
        </Toggle>
      </div>
      </div>
      </AnimateSharedLayout>
    </SkillsSection>
  );
}



export default Skills;