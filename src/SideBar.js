import React from 'react'
import { Link } from 'react-router-dom'
export default function SideBar({sidebar}) {
  return (
    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
    <li><a href="/Profile">My Profile</a></li>
    <li><a href="/Nutrient">Nutrition</a> </li>
  <li> <a href="/Viewpro">Search products</a> </li>
    
     {/* <li>Home</li> */}
    </div>
  )
}
