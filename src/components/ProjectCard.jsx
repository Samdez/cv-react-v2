import { useTransform, useViewportScroll } from "framer-motion";
import { ProjectCardStyle } from "../styles/styles";

const ProjectCard = ({ name, description, tools, link }) => {
  const { scrollYProgress } = useViewportScroll();
  const cardAnim = useTransform(scrollYProgress, [0, 1], [1000, 0]);

  return ( 
    <ProjectCardStyle 
    style= {{ y: cardAnim}}>
      <h3>{name}</h3>
      <p>{description}</p>
    </ProjectCardStyle>
   );
}
 
export default ProjectCard;