import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../Assets/docs/myResume.pdf'
import Fade from 'react-reveal/Fade';
const Home = () => {
  return (
    <>
    <Fade top>
    <div className= "home-container" id="home">
      <div className="home-content">
       <h2>Hi <img src="https://www.svgrepo.com/show/398590/waving-hand.svg" height="27px" alt="" /> I am a</h2> 
        <h3><Typewriter
  options={{
    strings: "Full Stack Web Developer",
    autoStart: true,
    loop: true,
  }}
/></h3>
<div className="home-buttons">
 <a href="https://api.whatsapp.com/send?phone=8948720881" rel="noreferrer" target="_blank"> <div className="btn btn-hire">
Hire Me
  </div></a>
  <div className="btn btn-resume">
    <a href={Resume} download = "myResume.pdf">My Resume</a>
  </div>
</div>
      </div>
    </div>
    </Fade>
    </>
  )
}

export default Home