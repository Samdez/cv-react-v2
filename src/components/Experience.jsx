import { motion, useTransform, useViewportScroll } from "framer-motion";
import { ExperienceSection, ProgrammerTitle, ProjectCardsContainer } from "../styles/styles";
import ProjectCard from './ProjectCard';

import  projectsList  from '../projectslist';
import { cursorWhite } from "../cursorAnimation";

const Experience = () => {
  const { scrollYProgress } = useViewportScroll();
  const xAnim = useTransform(scrollYProgress, [0, 1], [1000, 0]);
  const reverseXAnim = useTransform(scrollYProgress, [0, 1], [-1000, 0]);


  return (
    <ExperienceSection
    onMouseEnter={cursorWhite}
    >
      <motion.h2 style={{ x: xAnim }}>Experience</motion.h2>
      <ProgrammerTitle>
        <motion.h4 style={{ x: reverseXAnim }}>As a programmer</motion.h4>
      </ProgrammerTitle>
      <ProjectCardsContainer>
      {
        projectsList.map((project, index) => {
          return <ProjectCard 
          name={project.name} 
          description={project.description}
          tools={projectsList.tools}
          link={project.link}
          key={project.name}
          />
        })
      }
      </ProjectCardsContainer>
    </ExperienceSection>
  );
}

export default Experience;