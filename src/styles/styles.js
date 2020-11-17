import styled from 'styled-components';
import pic3 from '../img/pic3.jpg';
import { primaryColor } from '../styles/GlobalStyles'
import { motion } from 'framer-motion';


export const Hero = styled(motion.div)`
background-image: url(${pic3});
width: 100%;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
position: absolute;
top: 0;
z-index: -1;
`;

export const NavContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 100vh;
`;


export const Navbar = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
right: 10%;
z-index: 4;
width: 90%;
height: 10vh;
ul{
  display: flex;
  width: 50%;
  height: 10vh;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  li{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    &:hover{
      transition: all 0.5s ease;
      cursor: pointer;
      border-radius: 0px 0px 122px 122px;
      background-color: ${primaryColor};
    }
  }
}
`;

export const Name = styled.h2`
height: 10vh;
width: 25%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: nowrap; 
`;

export const AboutSection = styled(motion.div)`
margin-top: 0vh;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
  h2{
  font-size: 8rem;
    display: flex;
    align-items: center;
    height: 20vh;
  }
`;

export const AboutText = styled.div`
height: 20vh;
display: flex;
align-items: flex-end;
flex-direction: column;
justify-content: center;
font-size: 2rem;
width: 100%;
  p{
    height: 100%;
    display: flex;
    align-items: center;
}
`;

export const IconsContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-start;
padding: 1rem;
height: 20vh;
`;

export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 122px 0px 122px 0px;
  transition: all, 0.5s;
  height: 100%;
  width: 100%;
  &:hover{
  box-shadow: -19px -13px 37px 0px rgba(0,0,0,0.26);
    background-color: ${primaryColor};
    color: black;
  }
`;

export const ProgrammerSection = styled(AboutSection)`
align-items: flex-end;
background: ${primaryColor};
`;

export const ProgrammerText = styled(AboutText)`
width: 100%;
align-items: flex-start;
`;

export const SkillsSection = styled(AboutSection)`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
  .skills-sub-section{
height: 20vh;
}
  .skills-sub-section, .skill-content{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  }
  h2{
    margin-bottom: 6rem;
  }
  h3{
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  p{
    font-size: 1.4rem;
    line-height: 1.8;
  }
`;

export const ExperienceSection = styled.div`
height: 100vh;
background-color: ${primaryColor};
`;

export const ProjectCard = styled.div`
height: 30vh;
border: 1px solid black;
`;