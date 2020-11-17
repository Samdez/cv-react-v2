import GlobalStyle from './styles/GlobalStyles'
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import HeroPage from './components/Hero';
import Skills from './components/Skills';

import { AnimatePresence } from 'framer-motion';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <AnimatePresence>
      <GlobalStyle />
      <Nav />
      <HeroPage />
      <AboutMe />
      <Skills />
      <Experience />
      </AnimatePresence>
    </div>
  );
}

export default App;
