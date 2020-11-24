import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { cursorWhite } from "../cursorAnimation";
import { ContactPage } from "../styles/styles";

const Contact = () => {
  return (
    <ContactPage onMouseEnter={cursorWhite} id='contact'>
      <h1>Samuel de Zaldua</h1>
      <div className="line"></div>
      <div>
        <FiGithub style={{ fontSize: '4rem' }} />
          <FaLinkedinIn style={{ fontSize: '4rem' }} />
      </div>
      <h3>Bayonne France</h3>
        <a href="mailto:samuel.dezaldua@gmail.com">
          <h1>samuel.dezaldua@gmail.com</h1>
        </a>
    </ContactPage>
  );
}

export default Contact;