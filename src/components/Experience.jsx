import { motion, useTransform, useViewportScroll } from "framer-motion";
import { ExperienceSection, ProgrammerTitle } from "../styles/styles";

const Experience = () => {
  const { scrollYProgress } = useViewportScroll();
  const xAnim = useTransform(scrollYProgress, [0, 1], [1000, 0]);
  const reverseXAnim = useTransform(scrollYProgress, [0, 1], [-1000, 0]);


  return ( 
    <ExperienceSection>
      <motion.h2 style={{x: xAnim}}>Experience</motion.h2>
      <ProgrammerTitle>
      <motion.h4 style={{ x: reverseXAnim }}>As a programmer</motion.h4>
      </ProgrammerTitle>
    </ExperienceSection>
   );
}
 
export default Experience;