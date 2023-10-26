import React from 'react'
import './SidebarMenu.css'
import PortfolioNewImage from '../../Assets/ProjectImages/TulsiImage.jpeg'
import {Link} from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const SidebarMenu = ({toggle}) => {
  return (
    <>
    {toggle ? (
      <>
      <div className="nav-items-toggle">
     <div className="nav-item">
          <div className="nav-link">
          <Link to="home" smooth={true} spy={true} offset={-100} duration={100}><img src="https://cdn3d.iconscout.com/3d/premium/thumb/home-6546378-5376641.png" alt="home" title = "Home" height="27px" /></Link>
          </div>
        </div>
        <div className="nav-item">
        <div className="nav-link">
        <Link to="aboutPage" smooth={true} spy={true} offset={-100} duration={100}> <img src="https://static.vecteezy.com/system/resources/thumbnails/015/078/719/small/3d-speech-bubbles-icon-or-chat-message-notification-icon-or-3d-online-messaging-icon-free-png.png" height="27px" title = "About" alt="About" /></Link>
          </div>
          </div>
          <div className="nav-item">
          <div className="nav-link">
          <Link to="skills" smooth={true} spy={true} offset={-100} duration={100}>  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/feedback-8758868-7078456.png" height="27px" title = "Skills" alt="skills" /></Link>
          </div>
          </div>
          <div className="nav-item">
          <div className="nav-link">
          <Link to="training" smooth={true} spy={true} offset={-100} duration={100}><img src="https://cdn3d.iconscout.com/3d/premium/thumb/test-7686967-6159651.png?f=webp" height="27px"  title = "Training" alt="training" /></Link>
          </div>
          </div>
          <div className="nav-item">
          <div className="nav-link">
          <Link to="project" smooth={true} spy={true} offset={-100} duration={100}> <img src="https://static.vecteezy.com/system/resources/previews/009/636/766/original/project-development-3d-icon-png.png" height="27px" title = "Projects" alt="project" /></Link>
          </div>
          </div>
          <div className="nav-item">
          <div className="nav-link">
          <Link to="education" smooth={true} spy={true} offset={-100} duration={100}> <img src="https://static.vecteezy.com/system/resources/previews/013/368/609/original/3d-illustration-of-book-classroom-school-education-icon-png.png" height="27px" title = "Education" alt="education" /></Link>
          </div>
          </div>
          <div className="nav-item">
          <div className="nav-link">
          <Link to="contact" smooth={true} spy={true} offset={-100} duration={100}><img src="https://static.vecteezy.com/system/resources/previews/013/797/413/original/telephone-3d-rendering-isometric-icon-png.png" height="27px" title = "Contact" alt="contact" /></Link>
          </div>
          </div>
          </div>
      </>
    ) :
  (
<>
<div className="navbar-profile-pic">
         <Zoom> <img src={PortfolioNewImage} alt="Profile-pic" /></Zoom>
      </div>
      <Fade left>
      <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link">
        <Link to="home" smooth={true} spy={true} offset={-100} duration={100}> <img src="https://cdn3d.iconscout.com/3d/premium/thumb/home-6546378-5376641.png" alt="home" height="27px" />Home</Link>
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
          <Link to="aboutPage" smooth={true} spy={true} offset={-100} duration={100}> <img src="https://static.vecteezy.com/system/resources/thumbnails/015/078/719/small/3d-speech-bubbles-icon-or-chat-message-notification-icon-or-3d-online-messaging-icon-free-png.png" height="27px" alt="About" />About</Link>
          </div>
        </div>
        
        <div className="nav-item">
          <div className="nav-link">
          <Link to="skills" smooth={true} spy={true} offset={-100} duration={100}> <img src="https://cdn3d.iconscout.com/3d/premium/thumb/feedback-8758868-7078456.png" height="27px" alt="skills" />Skills </Link>
          </div>
        </div>
        <div className="nav-item">
        <div className="nav-link">
        <Link to="training" smooth={true} spy={true} offset={-100} duration={100}><img src="https://cdn3d.iconscout.com/3d/premium/thumb/test-7686967-6159651.png?f=webp" height="27px" alt="training" />Training </Link>
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
          <Link to="project" smooth={true} spy={true} offset={-100} duration={100}><img src="https://static.vecteezy.com/system/resources/previews/009/636/766/original/project-development-3d-icon-png.png" height="27px" alt="project" />Project </Link>
          </div>
        </div>
       
        <div className="nav-item">
          <div className="nav-link">
          <Link to="education" smooth={true} spy={true} offset={-100} duration={100}><img src="https://static.vecteezy.com/system/resources/previews/013/368/609/original/3d-illustration-of-book-classroom-school-education-icon-png.png" height="27px" alt="education" />Education </Link>
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-link">
          <Link to="contact" smooth={true} spy={true} offset={-100} duration={100}><img src="https://static.vecteezy.com/system/resources/previews/013/797/413/original/telephone-3d-rendering-isometric-icon-png.png" height="27px" alt="contact" />Contact </Link>
          </div>
        </div>
      </div></Fade>
</>
  )
  }
    </>
  )
}

export default SidebarMenu