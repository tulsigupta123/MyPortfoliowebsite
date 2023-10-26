import React from 'react'
import './Project.css'
import BlogWebsiteImage from '../../Assets/ProjectImages/blogWebsite.PNG'
import MusicWebsiteImage from '../../Assets/ProjectImages/musicwebsiteImage.PNG'
import buyHomeWebsiteImage from '../../Assets/ProjectImages/buyhomewebsiteImage.PNG'
import RubberBand from 'react-reveal/RubberBand';
const Project = () => {
  return (
    <>
    <div className="project-section" id="project">
    <center> <RubberBand><h2>PROJECTS</h2></RubberBand></center>
    <div className="project-container">
        <div className="project-card">
          <div className="project-tech">
            <center><h6>Full Stack</h6></center>
          </div>
          <div className="project-image">
            <img src= {BlogWebsiteImage} alt="blogWebsite" />
          </div>
          <div className="techUsed">
            <span>React</span>    
            <span>Express</span>
            <span>Nodejs</span>
            <span>Mongodb</span>
          </div>
          <div className="projectName">
            <h5>BlogWebsite</h5>
          </div>
          <div className="viewMore">
           <a href="https://github.com/tulsigupta123/myNewPortfolio/tree/main/Frontend" target="_blank" rel="noreferrer"><button>View More</button></a> 
          </div>
        </div>
        <div className="project-card">
          <div className="project-tech">
            <center><h6>Frontend</h6></center>
          </div>
          <div className="project-image">
            <img src= {MusicWebsiteImage} alt="MusicStatic"/>
          </div>
          <div className="techUsed">
            <span>HTML</span>    
            <span>CSS</span>
          </div>
          <div className="projectName">
            <h5>Music Website</h5>
          </div>
          <div className="viewMore">
          <a href="https://musical-instrument-website.netlify.app/" rel="noreferrer" target="_blank"><button>View More</button></a> 
          </div>
        </div>
        <div className="project-card">
          <div className="project-tech">
            <center><h6>Frontend</h6></center>
          </div>
          <div className="project-image">
            <img src= {buyHomeWebsiteImage} alt="healthWebsite" />
          </div>
          <div className="techUsed">
          <span>HTML</span>    
            <span>CSS</span>
          </div>
          <div className="projectName">
            <h5>Buy Home Website</h5>
          </div>
          <div className="viewMore">
          <a href="https://homebuywebsite.netlify.app/" target="_blank" rel="noreferrer"><button>View More</button></a> 
          </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Project