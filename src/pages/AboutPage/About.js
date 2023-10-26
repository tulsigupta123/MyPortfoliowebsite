import React from 'react'
import './About.css'
import PortfolioNewImage from '../../Assets/ProjectImages/TulsiImage.jpeg'


const About = () => {
  return (
    <>
    <div className="about" id="aboutPage">
    <img src={PortfolioNewImage}  height="230px" alt="Profile-pic"/>
        <div className="row">
        
            <div className="col-md-6 about-content">
            
             <h2>About Me</h2>
             <p>I am a motivated and skilled developer with experience in creating intuitive and visually stunning user experiences. I have completed training on MERN stack and seeking a job to leverage my exceptional teamwork, communication, and interpersonal skills. </p>
{/* Highly motivated and skilled Developer with a passion for creating intuitive and visually stunning user experience. */}
            </div>
        </div>
    </div>
    </>
  )
}

export default About