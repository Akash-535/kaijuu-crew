import './App.css';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import CrewClasses from './components/CrewClasses';
import StorySection from './components/StorySection';
import TraitsSection from './components/TraitsSection';
import RoadmapSection from './components/RoadmapSection';
import TeamSwiper from './components/TeamSwiper';
import FaqSection from './components/FaqSection';
import Preloader from './components/common/Preloader';
import BackToTop from './components/common/BackToTop';

function App() {
  return (
    <div>
      <Preloader/>
<HeroSection/>
<AboutUsSection/>
<CrewClasses/>
<StorySection/>
<TraitsSection/>
<RoadmapSection/>
<TeamSwiper/>
<FaqSection/>
<BackToTop/>
    </div>
  );
}

export default App;
