import React from 'react'
import './TechSkills.css'
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
const TechSkills = () => {
  return (
    <>
    <div className="container techSkills" id="skills">
       <RubberBand><h2>SKILLS</h2></RubberBand> 
      <h4><img src="https://emojiisland.com/cdn/shop/products/Right_Pointing_Backhand_Index_Emoji_Icon_ios10_1024x1024.png?v=1571606092" height="18px" alt="arrow hand" /> Including programming languages, frameworks, databases, frontend tools, backend tools and APIs.</h4>
    </div>
    <div className="skillName">
        <div className="row1">
        <Fade left><div className="ts">
         <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" height="26px" alt="html" /> HTML</div>
         <div className="ts">
         <img src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png" height="26px" alt="css" /> CSS
         </div>
         <div className="ts">
         <img src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" height="26px" alt="css" /> JavaScript
         </div></Fade>
        <Fade right><div className="ts">
         <img src=" https://static-00.iconduck.com/assets.00/jquery-icon-505x512-u4lk43ex.png" height="26px" alt="jquery" /> JQuery</div>
         <div className="ts">
         <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" height="26px" alt="bootstrap" /> Bootstrap</div></Fade> 
        </div>
        <div className="row2">
        <Fade left><div className="ts">
         <img src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png" height="26px" alt="react" /> React</div>
         <div className="ts">
         <img src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" height="26px" alt="mongodb" /> Mongodb</div></Fade>
         <Fade right><div className="ts">
         <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" height="26px" alt="nodejs" /> Nodejs</div>
         <div className="ts">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/480px-Status_iucn_EX_icon.svg.png" height="26px" alt="express" /> Express</div></Fade>
        </div>
    
    <div className="row3">
    <Fade left><div className="ts">
         <img src="https://icon-library.com/images/postman-icon/postman-icon-6.jpg" height="27px" alt="postman" /> Postman</div>
         <div className="ts">
         <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" height="26px" alt="github" /> Github</div></Fade>
         <Fade right><div className="ts">
         <img src="https://code.visualstudio.com/assets/branding/app-icon.png" height="26px" alt="vscode" /> Visual Studio Code</div></Fade>
        </div>
    
        </div>
    </>
  )
}

export default TechSkills