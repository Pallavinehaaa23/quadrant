import {React,useState} from 'react';
import Pro from './Pro';
import Cat from './Cat';
import items from './Info';
const Viewpro = () => {
  const [proitem,setProItem]=useState(items);
  const [categories,setCategories]=useState([]);
const filterit=(category)=>{
  if(category==='all'){
  setProItem(items);
  return;
  }
  const newItems=items.filter((item)=>item.category===category)
  setProItem(newItems);
}

  return (
    <>
    <div className="view">
        <div className="title">
            <h1><b>What's Here?
              </b></h1>
        </div>
        <Cat filterit={filterit}/>
        <Pro items={proitem}/>
    </div>

    </>
  )
}

export default Viewpro
