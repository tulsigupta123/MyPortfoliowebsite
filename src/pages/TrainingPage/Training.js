import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import './Training.css'

const Training = () => {
  return (
    <>
   <div className="training-section" id="training">
   <center><h2>TRAINING AND COURSES</h2></center> 
    <div className="training-container">
    <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="April 2023 - October 2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<VerifiedUserIcon />}
          >
            <h3 className="vertical-timeline-element-title">Live Training on MERN Stack</h3>
            <h4 className="vertical-timeline-element-subtitle">
              DUCAT INDIA (GURGAON)
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="January 2022-December 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<VerifiedUserIcon/> }
          >
            <h3 className="vertical-timeline-element-title">Course on MERN Stack</h3>
            <h4 className="vertical-timeline-element-subtitle">
              PW SKILLS
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
</div>
   </div>
    </>
  )
}

export default Training