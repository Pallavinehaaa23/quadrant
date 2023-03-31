import {React,useState} from 'react'
import {buyers} from './Buyers';
import { FaSearch,FaShoppingCart } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
const Search = () => {
    const [query,setQuery]=useState("")
  return (
    <>
    <div className='search-bar'>
      <div className="bar">
        <FaSearch id="srch-icon"/><input type="text" placeholder='Search Here' className='search' onChange={(e)=>setQuery(e.target.value)} />
        </div>
        <ul className='list'>
         {buyers.filter((b)=>b.name.toLowerCase().includes(query)).map((b)=>(
          <li key={b.id}>
          <div className="srch">
          <img src={b.img} alt=""  id="srchimg"/>
            <div className="srchbody">
              <a href="https://buy.stripe.com/test_14k3ep5E4fCh9dmfYY"><FaShoppingCart id="cart"/></a>
              <h4>{b.name}</h4>
              <h4 id="bprice"><b>{b.price}</b></h4>
              <p>{b.desc}</p>
              <h5>{b.sname}</h5>
              <p>{b.address}</p>
              <h5>{b.custrating}<FcRating/></h5>
            </div>
          </div>
          </li>
         ))}
        </ul>
     </div>
     <div class="location">
      <h3> Nearby Stores</h3>
    <div class="go">
      <input type="search" id="search" placeholder="where to go ?"/>
      <span><button id="btn">Search</button></span>
      <img src="https://miro.medium.com/max/6000/1*xs36gT9hM34aKPucjGWQLQ.jpeg"></img>
    </div>
    
  </div>
    </>
  )
}

export default Search
