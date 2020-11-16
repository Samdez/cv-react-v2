import styled from 'styled-components';
import pic3 from '../img/pic3.jpg';

export const Hero = styled.div`
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

// export const StyledLink = styled.a`
// text-decoration: none;
// color: black;
// font-size: 1.2rem;
// font-weight: 600;
// &:focus, &:visited, &:link{
//   text-decoration: none;
//   } 
// &:hover{
//   color: black;
//   transition: all 0.5s ease;
// }
// &:active{
//   color: black;
// }
// `;

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
      background-color: #0AECB2;
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

export const AboutSection = styled.div`
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
  p{
    height: 100%;
    display: flex;
    align-items: center;
}
`;

export const IconsContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 1rem;
`;




export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0px solid #000000;
  border-radius: 122px 0px 122px 0px;
    transition: all, 0.5s;
    
  &:hover{
  box-shadow: -19px -13px 37px 0px rgba(0,0,0,0.26);
    background-color: #C18D47;
    color: black;
  }
`;

export const ProgrammerSection = styled(AboutSection)`
align-items: flex-end;
background: #C18D47;
`;

export const ProgrammerText = styled(AboutText)`
width: 100%;
align-items: flex-start;
`;

