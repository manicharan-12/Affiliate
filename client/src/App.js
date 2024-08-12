import './App.css';
import Home from './components/Home';
import GetStarted from './components/Get Started';
import Benefits from './components/Benfits';
import Accordion from './components/FAQ';
import Carousel from './components/carousel';

function App() {
  return (
    <>
      <Home/>
      <GetStarted/>
      <Benefits/>
      <Carousel/>
      <Accordion/>
    </>
  );
}

export default App;
