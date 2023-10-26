import React,{useState} from 'react'
import Home from '../../pages/HomePage/Home.js'
import SidebarMenu from '../SidebarMenu/SidebarMenu.js'
import './Sidebar.css'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const Sidebar = () => {
  const [toggle,setToggle] = useState(true)

  // Handle Toggle-
  const handleToggle = () =>{
    setToggle(!toggle)
  }
  return (
    <>
    <div className="sidebar-section">
    <div className= {toggle ? "sidebar-container" : "sidebar-toggle sidebar-container"}>
    <div className="sidebar-toggle-icons">
       <p onClick = {handleToggle}>
       {toggle?(<KeyboardDoubleArrowLeftIcon/>):(<KeyboardDoubleArrowRightIcon/>)}
      </p> 
    </div>
    <SidebarMenu toggle={toggle}/>
    </div>
    <div className="container">
    <Home/> 
    </div>
    </div>
    </>
  )
}

export default Sidebar