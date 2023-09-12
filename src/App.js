import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import Impact from './Components/bottomsection/Impact';

import OurCourse from './Components/OurCourse';
import Masaiverse from './Components/Masaiverse';
import HiringPartners from './Components/HiringPartners';
import Curriculum from './Components/Curriculum';
import NavbarNew from './Components/NavbarNew';

function App() {
  return (
    <div className="App">
      <NavbarNew/>

      <Impact/>

      <OurCourse/>
      <Curriculum/>
      <Masaiverse/>
      <HiringPartners/>

    </div>
  );
}

export default App;
