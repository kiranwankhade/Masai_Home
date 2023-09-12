
import './App.css';
import Navbar from './Components/Navbar';
import DreamJob from './Components/DreamJob';
import DrivenOutComes from './Components/DrivenOutComes';

import Impact from './Components/bottomsection/Impact';

import OurCourse from './Components/OurCourse';
import Masaiverse from './Components/Masaiverse';
import HiringPartners from './Components/HiringPartners';
import Curriculum from './Components/Curriculum';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <DreamJob/>
      <DrivenOutComes/>
      <OurCourse/>
      <Curriculum/>
      <Masaiverse/>
      <HiringPartners/>
      <Impact/>
     </div>
  );
}

export default App;
