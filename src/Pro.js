import React from 'react'

const Pro = ({items}) => {
  return <div className="section-center">
    {items.map((b)=>{
        const {id,img,name,price}=b;
        return <article key={id} className='b-item'>
                <img src={img} alt="" className='photo'/>
                <div className="item-info">
                    <header>
                        <h4>{name}</h4>
                        <h4 className="prodprice">{price}</h4>
                    </header>
                </div>
            </article>
        
    })}
    
</div>
  
}

export default Pro
