import {React,useState} from 'react';
import Deficiency from './Deficiency';
import items from './Nutinfo';
import { FaSearch,FaShoppingCart } from "react-icons/fa";
import Catnutrient from './Catnutrient';
const Nutrient= () => {
  const [proitem,setProItem]=useState(items);
  const [categories,setCategories]=useState([]);
  const [query,setQuery]=useState("")
  const [filterData,setFilterData]=useState([]);
const filterit=(category)=>{
 
  const newItems=items.filter((item)=>item.category===category)
  setProItem(newItems);
}

  return (
    <>
    <div className="view">
        <div className="title-nut">
            <h1>Nutrients Suggested:</h1>
            {/* <div className="bar">
        <FaSearch id="srch-icon"/><input type="text" placeholder='Search Here' className='search' onChange={(e)=>setQuery(e.target.value)} />
        </div>
        <div className="dataresult">
            {items.map((value,key)=>{
                return(
                    <a href="" className="dataitem">
                        <p>{value.name}</p>
                    </a>
                )
            })}
        </div> */}
        </div>
        <Deficiency filterit={filterit}/>
        <Catnutrient items={proitem}/>
    </div>

    </>
  )
}

export default Nutrient
