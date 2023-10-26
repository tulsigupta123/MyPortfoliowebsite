import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js'
import AboutPage from './pages/AboutPage/About.js'
import Education from './pages/EducationPage/Education.js'
import TechSkills from './pages/TechSkills/TechSkills.js'
import Project from './pages/Projects/Project.js'
import Training from './pages/TrainingPage/Training.js'
import ContactPage from './pages/ContactPage/Contact.js'
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
    <Sidebar/>
    <AboutPage/>
    <TechSkills/>
    <Training/>
    <Project/>
    <Education/>
    <ContactPage/>
    <ScrollToTop smooth color="#f29f67" style={{backgroundColor:"#1e1e2e",borderRadius:"50%",paddingRight:"50px",marginRight:"-20px"}}/>
    </>
  );
}

export default App;
