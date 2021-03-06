import { useState } from 'react';

import { IconsContainer, IconCard } from '../styles/styles';
import { IoLogoJavascript } from 'react-icons/io';
import { DiReact } from 'react-icons/di';
import { FiGithub } from 'react-icons/fi';
import { FaNode } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { logoAnimation, container } from '../animation'
import { cursorWhite } from '../cursorAnimation';

const IconsSection = () => {
  const [jsLogo, setJsLogo] = useState(false);
  const [reactLogo, setReactLogo] = useState(false);
  const [githubLogo, setGithubLogo] = useState(false);
  const [nodeLogo, setNodeLogo] = useState(false);
  return (
    <IconsContainer variants={container} initial='hidden' animate='show' onMouseEnter={cursorWhite}>
      <IconCard>
        <IoLogoJavascript style={{ fontSize: '4rem' }} className='icon' onClick={() => setJsLogo(!jsLogo)} />
        {jsLogo && <motion.p variants={logoAnimation} initial='hidden' animate='show' >Javascript</motion.p>}
      </IconCard>
      <IconCard>
        <DiReact style={{ fontSize: '4rem' }} onClick={() => setReactLogo(!reactLogo)} />
        {reactLogo && <motion.p variants={logoAnimation} initial='hidden' animate='show' >React</motion.p>}
      </IconCard>

      <IconCard>
        <FiGithub style={{ fontSize: '4rem' }} onClick={() => setGithubLogo(!githubLogo)} />
        {githubLogo && <motion.p variants={logoAnimation} initial='hidden' animate='show' >Github</motion.p>}
      </IconCard>
      <IconCard>
        <FaNode style={{ fontSize: '4rem' }} onClick={() => setNodeLogo(!nodeLogo)} />
        {nodeLogo && <motion.p variants={logoAnimation} initial='hidden' animate='show' >NodeJS</motion.p>}
      </IconCard>

    </IconsContainer>
  );
}

export default IconsSection;