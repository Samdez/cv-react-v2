import { useTransform, useViewportScroll } from "framer-motion";
import { ProjectCardStyle } from "../styles/styles";

const ProjectCard = ({ name, description, tools, link }) => {
  const { scrollYProgress } = useViewportScroll();
  const cardAnim = useTransform(scrollYProgress, [0, 0.8], [300, 0]);

  return ( 
    <a href={link} target="_blank" rel="noreferrer">
    <ProjectCardStyle 
    style= {{ y: cardAnim}}>
      <h3>{name}</h3>
      <p>{description}</p>
    </ProjectCardStyle>
    </a>
   );
}
 
export default ProjectCard;