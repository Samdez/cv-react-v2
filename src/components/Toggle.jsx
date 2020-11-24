import { useState } from "react";
import styled from 'styled-components'; 
import {motion} from 'framer-motion';
import {skillsAnimation} from '../animation';
import { primaryColor } from "../styles/GlobalStyles";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <SkillParagraph variants={skillsAnimation} layout onClick={() => setToggle(!toggle)} >
      <motion.h3  layout className="skill-title">{title}</motion.h3>
      {toggle && children}
      <motion.div layout className="line"></motion.div>
    </SkillParagraph>
  );
}

const SkillParagraph = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;
  h3:hover{
    border-bottom: 3px solid ${primaryColor};
  }
`;


export default Toggle;