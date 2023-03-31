import React from 'react'
import { FaDribbble,FaLinkedin,FaTwitter, FaFacebook } from 'react-icons/fa'
const Profile = () => {
  return (
   <>
    <div class="card-profile">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/c1/6a/b1/c16ab142-2920-9bda-d2f0-121792707af6/AppIcon-0-1x_U007emarketing-0-7-0-85-220.jpeg/512x512bb.jpg" alt=""/>
  <h1> API trader</h1>
  <p className="title-prof"><span>Name:</span>  Mr Sanjay Bansal</p>
  <p className="title-prof"> <span>Seller id:</span> 56437829iitg</p>
  <p className="title-prof"><span>Products:</span> honey and diary products</p>
  <p className="title-prof"><span>Address:</span> Gopabandhunagar ,shaheed bhavan ,BBSR </p>
  <p className="title-prof"><span>Ratings:</span> 3.8*</p>
  <p className="title-prof"><span>Contact details:</span> phone no=9835467265</p>
  <p className="title-prof"><span>Registered since 2019</span></p>

  <a href="#"><FaDribbble/></a>
  <a href="#"><FaLinkedin/></a>
  <a href="#"><FaTwitter/></a>
  <a href="#"><FaFacebook/></a>
  
</div>

</>

  )
}

export default Profile
