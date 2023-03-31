import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import logo from './logo.png';
const NavBar = () => {
  const[nav,setNav]=useState(false);
  const changeBackground =()=>{
    if(window.scrollY >=50)
    setNav(true);
    else
    setNav(false);
  }
  window.addEventListener('scroll',changeBackground);
  return (
    <nav className={nav ? "nav active":"nav"}>
    
      <h2><img src={logo}/></h2>
  
    <ul className="menu">
    <li><Link to = "/Frontpg">Home</Link></li>
      <li><Link to = "/About">About Us</Link></li>
     
      <li><Link to ="/OldUser"><FaRegUserCircle className='icon'/>For Buyer</Link></li>
      <li><Link to ="/SignSeller"><FaShopify className='icon'/>For Seller</Link></li>
      <li><Link to ="/Contact">Contact Us</Link></li>
    
      {/* <li><Link to ="/OldUser">login</Link></li>
      <li><Link to ="/LoginBuyer">Register</Link></li> */}
     
      
    </ul>
    </nav>
    
  )
}

export default NavBar
