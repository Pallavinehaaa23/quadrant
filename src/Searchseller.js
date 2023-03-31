import {React,useState} from 'react'
import {sellers} from './Sellers';
import Barseller from './Barseller';
import { FaSearch } from "react-icons/fa";
// import { FcRating } from "react-icons/fc";
const Searchseller = () => {
    const [query,setQuery]=useState("")
  return (
    <>
    <Barseller/>
    <div className='search-bar-seller'>
      <div className="bar-seller">
        <FaSearch id="srch-icon-seller"/><input type="text" placeholder='Search Here' className='search' onChange={(e)=>setQuery(e.target.value)} />
        </div>
        <ul className='list-seller'>
         {sellers.filter((b)=>b.name.toLowerCase().includes(query)).map((b)=>(
          <li key={b.id}>
          <div className="srchseller">
          <img src={b.img} alt=""  id="srchimg"/>
            <div className="srch-seller-body">
        
              <h4>{b.name}</h4>
             <p>{b.desc}</p>
            </div>
          </div>
          </li>
         ))}
        </ul>
     </div>
    
    </>
  )
}

export default Searchseller
