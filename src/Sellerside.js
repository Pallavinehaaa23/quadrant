import React from 'react'
import {Link} from 'react-router-dom'
export default function SideBar({sellsidebar}) {
  return (
    <div className={sellsidebar?"sellsidebar sellsidebar--open":"sellsidebar"}>
    <li><Link to="/Profile">My Profile</Link></li>
    <li>My Orders</li>
    
     {/* <li>Home</li> */}
    </div>
  )
}
