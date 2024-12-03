import './App.css';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CrewClasses from './components/CrewClasses';
import StorySection from './components/Story';
import Traits from './components/Traits';
import Roadmap from './components/Roadmap';
import TeamSwiper from './components/TeamSwiper';
import Preloader from './components/common/Preloader';
import BackToTop from './components/common/BackToTop';
import Accordion from './components/Accordion';

function App() {
  return (
    <div>
      <Preloader/>
      <Hero/>
<AboutUs/>
<CrewClasses/>
<StorySection/>
<Traits/>
<Roadmap/>
<TeamSwiper/>
<Accordion/>
<BackToTop/>
    </div>
  );
}

export default App;
