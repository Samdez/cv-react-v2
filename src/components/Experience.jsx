import { motion, useTransform, useViewportScroll } from "framer-motion";
import { ExperienceSection, MusicianDescription, MusicianExperienceSection, ProgrammerTitle, ProjectCardsContainer, MusicianIcons, MusicLink } from "../styles/styles";
import ProjectCard from './ProjectCard';

import projectsList from '../projectslist';
import { cursorPrimary, cursorWhite } from "../cursorAnimation";
import { FaSpotify } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { fade } from "../animation";
import { useScroll } from "../useScroll";

const Experience = () => {
  const { scrollYProgress } = useViewportScroll();
  const xAnim = useTransform(scrollYProgress, [0, 1], [1000, 0]);
  const reverseXAnim = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
  const [element, controls] = useScroll();


  return (
    <>
      <ExperienceSection
        onMouseEnter={cursorWhite}
        id='experience'
      >
        <motion.h2 style={{ x: xAnim }}>Experience</motion.h2>
        <ProgrammerTitle>
          <motion.h4 style={{ x: reverseXAnim }}>As a programmer</motion.h4>
        </ProgrammerTitle>
        <ProjectCardsContainer>
          {
            projectsList.map((project, index) => {
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
      <MusicianExperienceSection
        onMouseEnter={cursorPrimary}
      >
        <MusicianIcons variants={fade} ref={element} animate={controls} initial='hidden'>
          <MusicLink>
            <a href="https://open.spotify.com/artist/0yABOXFZ5fJ1KyoXXgj5B0" rel="noreferrer" target="_blank"><FaSpotify style={{ fontSize: '4rem' }} />
              <h4>Listen</h4>
            </a>
          </MusicLink>
          <MusicLink>
            <a href="https://www.instagram.com/otaambeatmaker/?hl=fr" rel="noreferrer" target="_blank"><FiInstagram style={{ fontSize: '4rem' }} />
              <h4>Watch</h4>
            </a>
          </MusicLink>
        </MusicianIcons>
        <div>
          <MusicianDescription variants={fade} ref={element} animate={controls} initial='hidden'>
            <motion.p variants={fade}>Over the years, I have accumulated over 10M streams with my solo project Otaam</motion.p>
            <motion.p variants={fade}>and played hundreds of shows in France and in Europe.</motion.p>
            <motion.p variants={fade}>I have taught individual students to play the guitar</motion.p>
            <motion.p variants={fade}>and worked as a professor in music academies.</motion.p>
          </MusicianDescription>
          <ProgrammerTitle>
            <motion.h4 style={{ x: xAnim }}>As a producer</motion.h4>
          </ProgrammerTitle>
        </div>
      </MusicianExperienceSection>
    </>
  );
}

export default Experience;