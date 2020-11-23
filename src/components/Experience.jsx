import { motion, useTransform, useViewportScroll } from "framer-motion";
import { ExperienceSection, MusicianDescription, MusicianExperienceSection, ProgrammerTitle, ProjectCardsContainer, MusicianIcons } from "../styles/styles";
import ProjectCard from './ProjectCard';

import projectsList from '../projectslist';
import { cursorPrimary, cursorWhite } from "../cursorAnimation";
import { FaSpotify } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Experience = () => {
  const { scrollYProgress } = useViewportScroll();
  const xAnim = useTransform(scrollYProgress, [0, 1], [1000, 0]);
  const reverseXAnim = useTransform(scrollYProgress, [0, 1], [-1000, 0]);


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
        <MusicianIcons>
          <div>
            <a href="https://open.spotify.com/artist/0yABOXFZ5fJ1KyoXXgj5B0" rel="noreferrer" target="_blank"><FaSpotify style={{ fontSize: '4rem' }} /></a>
            <h4>Listen</h4>
          </div>
          <div>
            <a href="https://www.instagram.com/otaambeatmaker/?hl=fr" rel="noreferrer" target="_blank"><FiInstagram style={{ fontSize: '4rem' }} /></a>
            <h4>Watch</h4>
          </div>
        </MusicianIcons>
        <div>
          <MusicianDescription>
            <p>I've accumulated over 10M streams with my solo project Otaam over the years</p>
            <p>and played hundreds of shows in France and in Europe.</p>
            <p>I've teached guitar both for private students</p>
            <p>and in music schools.</p>
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