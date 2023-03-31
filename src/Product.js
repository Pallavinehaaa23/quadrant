import React from 'react'
import { Link } from 'react-router-dom';

export default function Product(props) {
  return (
    <div className='item'>
    <Link to="/Viewpro"><img className='item-img' src={props.url} alt="" /></Link>
    <h2>{props.name}</h2> 
    </div>
  )
}
