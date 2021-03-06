import styled from 'styled-components';

const Cursor = () => {
  return (<StyledCursor className='cursor'>
    <div></div>
  </StyledCursor>);
}

const StyledCursor = styled.div`
width: 3rem;
height: 3rem;
border: 2px solid black;
border-radius: 50%;
position: absolute;
transform: translate(-50%, -50%);
pointer-events: none;
transition: all 0.2s ease;
transition-property: background, border, transform;
transform-origin: 150% 150%;
z-index: 999;
`;

export default Cursor;