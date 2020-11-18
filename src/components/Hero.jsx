import { pictureAnimation } from '../animation';
import { cursorPrimary } from '../cursorAnimation';
import {Hero} from '../styles/styles'

const HeroPage = () => {
  return ( 
    <Hero variants={pictureAnimation} initial= 'hidden' animate='show'
    onMouseEnter={cursorPrimary}
    />
   );
}
 
export default HeroPage;