import { Navbar, Name, NavContainer } from '../styles/styles'

const Nav = () => {
  return (
    <NavContainer>
    <Name>Samuel de Zaldua</Name>
    <Navbar>
      <ul>
        <li>
          <a href='#about-me'>About me</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
        <a href='#contact'>Contact/Info</a>  
        </li>
      </ul>
    </Navbar>
    </NavContainer>
  );
}

export default Nav;