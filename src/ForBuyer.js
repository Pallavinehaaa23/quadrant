import {React,useState} from 'react'
import {AiOutlineMenu } from "react-icons/ai";
import SideBar from './SideBar';

import Search from './Search';
const ForBuyer = () => {
  const[sideBar,setSideBar]=useState(false);
  const toggleSideBar =()=>{
    setSideBar((prev)=>!prev);
  }
  return (
   <div className="toolbar">
    <div className="burger" onClick={toggleSideBar}>
      <AiOutlineMenu className="baricon"/> 
      </div> 
      <SideBar sidebar={sideBar}/>
      
      <Search/>
   </div>
  )
}

export default ForBuyer
