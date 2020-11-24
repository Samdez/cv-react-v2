import { useViewportScroll, motion, useTransform } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { cursorWhite } from "../cursorAnimation";
import { ContactIcons, ContactPage } from "../styles/styles";

const Contact = () => {
  const { scrollYProgress } = useViewportScroll();
  const lineAnim = useTransform(scrollYProgress, [0, 1], [-10, 1]);
  return (
    <ContactPage onMouseEnter={cursorWhite} id='contact'>
      <h1>Samuel de Zaldua</h1>
      <motion.div className="line" style={{ scale: lineAnim }}></motion.div>
      <ContactIcons>
        <a href="https://github.com/Samdez" target="_blank" rel="noreferrer">
        <FiGithub style={{ fontSize: '4rem' }} />
        </a>
        <a href="https://www.linkedin.com/in/samuel-de-zaldua/" target="_blank" rel="noreferrer">
        <FaLinkedinIn style={{ fontSize: '4rem' }} />
        </a>
      </ContactIcons>
      <h3>Bayonne</h3>
      <h3>France</h3>
      <a href="mailto:samuel.dezaldua@gmail.com">
        <h1>samuel.dezaldua@gmail.com</h1>
      </a>
    </ContactPage>
  );
}

export default Contact;