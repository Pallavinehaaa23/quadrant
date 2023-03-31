import {React,useState} from 'react'
import {AiOutlineMenu } from "react-icons/ai";
import Sellerside from './Sellerside';

// import Search from './Search';
import Searchseller from './Searchseller';
const ForBuyer = () => {
  const[sideBar,setSideBar]=useState(false);
  const toggleSideBar =()=>{
    setSideBar((prev)=>!prev);
  }
  return (
   <div className="seller-toolbar">
    <div className="seller-burger" onClick={toggleSideBar}>
      <AiOutlineMenu/> 
      </div> 
      <Sellerside sellsidebar={sideBar}/>
 
      <Searchseller/>
      
   </div>
  )
}

export default ForBuyer
