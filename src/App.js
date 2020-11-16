import GlobalStyle from './styles/GlobalStyles'
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import HeroPage from './components/Hero';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <HeroPage />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
