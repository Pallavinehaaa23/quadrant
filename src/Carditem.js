import React from 'react'
import Product from './Product';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Carditem = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const productData =[
        {
            id:1,
            imgurl:"https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Dairy Products"
        },
        
        {
            id:2,
            imgurl:"https://images.pexels.com/photos/256318/pexels-photo-256318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Pulses"
        },
        {
            id:3,
            imgurl:"https://images.pexels.com/photos/6422037/pexels-photo-6422037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Honey"
        },
        {
            id:4,
            imgurl:"https://images.pexels.com/photos/1550021/pexels-photo-1550021.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"bakery"
        },
        {
            id:5,
            imgurl:"https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Nuts"
        },
        {
            id:6,
            imgurl:"https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Groceries"
        },
        
        
      ]
      const product =productData.map(item =>(<Product name={item.name} url={item.imgurl}/>))
  return (
    <div className='cards'>
      <Carousel responsive={responsive}>
 {product}
  
</Carousel>
    </div>
  )
}

export default Carditem
