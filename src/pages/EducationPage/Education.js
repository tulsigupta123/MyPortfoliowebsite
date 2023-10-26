import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import './Education.css'

const Education = () => {
  return (
    <>
    <div className="education-section" id="education">
   <center><h2>EDUCATION</h2></center>
    <div className="education-container">
    <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2015 - 2018"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science(IT) - Grade 61%</h3>
            <h4 className="vertical-timeline-element-subtitle">
              KANPUR UNIVERSITY
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2014 - 2015"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<SchoolIcon/> }
          >
            <h3 className="vertical-timeline-element-title">InterMediate - Grade 92%</h3>
            <h4 className="vertical-timeline-element-subtitle">
              CSJM UNIVERSITY
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    </div>
    </>
  )
}

export default Education