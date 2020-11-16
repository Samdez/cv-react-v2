import GlobalStyle from './styles/GlobalStyles'
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import { Hero } from './styles/styles';
import HeroPage from './components/Hero';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <HeroPage />
      <AboutMe />
    </div>
  );
}

export default App;
