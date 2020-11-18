import GlobalStyle from './styles/GlobalStyles'
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import HeroPage from './components/Hero';
import Skills from './components/Skills';

import { AnimatePresence } from 'framer-motion';
import Experience from './components/Experience';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="App" onMouseMove={e => {
      const cursor = document.querySelector(".cursor")
      cursor.style.left = `${e.pageX}.px`
      cursor.style.top = `${e.pageY}.px`
    }} >
      <AnimatePresence>
        <GlobalStyle />
        <Cursor
        />
        <Nav />
        <HeroPage />
        <AboutMe />
        <Skills />
        <Experience />
      </AnimatePresence>
    </div >
  );
}

export default App;
