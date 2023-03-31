import React from 'react'

const Cat = ({filterit}) => {
  return (
    <div className='btns'>
        <button className='prodfilter' onClick={()=>filterit('all')}>all</button>
      <button className='prodfilter' onClick={()=>filterit('Dairy')}>Dairy</button>
      <button className='prodfilter' onClick={()=>filterit('Pulses')}>Pulses</button>
      <button className='prodfilter' onClick={()=>filterit('Honey')}>Honey</button>
      <button className='prodfilter' onClick={()=>filterit('Groceries')}>Groceries</button>
      <button className='prodfilter' onClick={()=>filterit('Nuts')}>Nuts</button>
      <button className='prodfilter' onClick={()=>filterit('Bakery')}>Bakery</button>
      
    </div>
  )
}

export default Cat
