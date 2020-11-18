import { cursorWhite, cursorWhiteHover } from '../cursorAnimation';
import { Navbar, StyledLink, Name, NavContainer } from '../styles/styles'

const Nav = () => {
  return (
    <NavContainer>
    <Name>Samuel de Zaldua</Name>
    <Navbar>
      <ul>
        <li>
          <a to='/'>About me</a>
        </li>
        <li>
          <a to='/experience'>Experience</a>
        </li>
        <li>
        <a to='/contact'>Contact/Info</a>  
        </li>
      </ul>
    </Navbar>
    </NavContainer>
  );
}

export default Nav;