import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import Impact from './Components/bottomsection/Impact';

import OurCourse from './Components/OurCourse';
import Masaiverse from './Components/Masaiverse';
import HiringPartners from './Components/HiringPartners';
import Curriculum from './Components/Curriculum';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Impact/>

      <OurCourse/>
      <Curriculum/>
      <Masaiverse/>
      <HiringPartners/>

    </div>
  );
}

export default App;
