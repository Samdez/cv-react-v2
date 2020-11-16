import { pictureAnimation } from '../animation';
import {Hero} from '../styles/styles'

const HeroPage = () => {
  return ( 
    <Hero variants={pictureAnimation} initial= 'hidden' animate='show'/>
   );
}
 
export default HeroPage;