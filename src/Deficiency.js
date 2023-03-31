import React from 'react'

const Deficiency = ({filterit}) => {
  return (
    <div className='nut'>
       
      <button className='prodfinut' onClick={()=>filterit('Calcium')}>Calcium</button>
      <button className='prodfinut' onClick={()=>filterit('Iodine')}>Iodine</button>
      <button className='prodfinut' onClick={()=>filterit('Iron')}>Iron</button>
      <button className='prodfinut' onClick={()=>filterit('Potassium')}>Potassium</button>
      <button className='prodfinut' onClick={()=>filterit('Zinc')}>Zinc</button>
      {/* <button className='prodfinut' onClick={()=>filterit('Hign Bp')}>High Bp</button> */}
      <button className='prodfinut' onClick={()=>filterit('Diabetes')}>Diabetes</button>
      <button className='prodfinut' onClick={()=>filterit('Hypothirodism')}>Hypothirodism</button>
      <button className='prodfinut' onClick={()=>filterit('Cholestrol')}>Cholestrol</button>
    
    </div>
  )
}

export default Deficiency
