import React from 'react'
// import NavBar from './NavBar'
// import { Link } from 'react-router-dom';
import img from './WhatsApp Image 2023-03-15 at 10.39.04.jpg';
import img2 from  './WhatsApp Image 2023-03-15 at 10.39.05.jpg';
import img3 from './pics1.jpg';
import img4 from './pics2.jpg';
import img5 from './gr.jpg';
import img6 from './sritam.jpg';
import img7 from './lipsa.jpg';
import img8 from './pallu.jpg';
import { FaInstagram,FaTwitter,FaGithub,FaFacebook } from "react-icons/fa";
const About = () => {
  return (
   <>
   <div className="body">
   <div className="imgabout">
    <div className="imgtxt">
    {/* <h1>ABOUT US</h1> */}
    </div>
    <img src="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg" alt="" srcset="" />
    </div>
    <div className="content-1">
        <h2>Problem Statement</h2>
      <br/>
      
        <p>Since a large population is locally based and the local market is highly disrupted and unorganised so it eventually gets over shadowed by the big giant brands and doesn’t get its recognition.
         So, the local products produced by the manufactures and local sellers are either sold at underrated price or gets wasted.since due to less awareness,they don't get the access to better agricultural practices and hence could not  expand their business.
         Even the consumers donot get access to pure indigeous food products anduse the package toxic preservative foods and hence suffer from malnutrition and undernourished nutrition.</p>
        
         <img src={img} alt="" />
         
    </div>
    <div className="content-2">
        <h2>Our Mission</h2><br/>
       
        <img src={img2} alt="" />
        <b><p>1.  By 2030, end all forms of malnutrition, including achieving, by 2025, <br></br>the internationally agreed targets on stunting and wasting in children<br></br> under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons.<br></br>
           2.  By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists, and fishers, including through secure and equal access to land,<br></br> other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment.
        </p></b>
        
<b></b>
    </div>
    <div className="content-3">
    <img src={img3} alt="" srcset="" />
     <b> <p><b>1.</b> Our solution approach is a website that is open for sellers and customer. <br></br>A seller can be a  small scale farmer and small scale indigious food sellers who <br></br>wants to sell his crops like wheat ,rice ,pulses ,diary ,vegetables ,fruits, honey and other raw material products <br></br>through our website to the local and nearby locations .<br></br>
<b>2.</b>  And they at first have to register in our website and while  registering,<br></br> they will have to  give all their details and their dashboard will be there describing their product and location. <br></br>
<b>3.</b> They give the details of which type of crop they will be selling and according to that <br></br>our website would suggest best agricultural practices to increase their productivity and income at the same time.<br></br> 
<b>4.</b> They would get a code from our website that is their identity code which certify them to be a verified seller on our website and they can sell their products directly from our website.<br></br>
<b>5.</b> It would be a one-to-one direct connection between the sellers and buyers.<br></br>
<b>6.</b> Hence the sellers will be able to charge the right amount for their crop.<br></br>
<b>7.</b> Then the buyers can also login on our webpage. They will   have to give all their details, their age and any kind of disease or nutritious deficiency they are suffering from.<br></br><b>8.</b> Then according to all the details filled by them ,Our website would suggest best possible nutritious, high pure quality food that their body requires and that they should have. So that they do not suffer from malnutrition or any kind of deficiency. And according to the food they require they can search in our website and directly buy from nearest sellers ,By this we would help the local traders toscale and help the people to maintain a healthy diet so that they do not suffer from nutrition deficiency or malnutrition.
The most important  is the quality of indigious products in our website which will verified by our on-ground team and then certify them their seller id.<br></br>
Then since we want our website to be open to all states so in order to overcome language barrier ,our website is present in all languages.
</p></b>

    </div>
    <div className="content-4">
     
      
<img src={img4} alt="" srcset="" />
<b><p>We want to create a strong network base of local small scale indigious sellers and help<br></br> them to scale up their business and help them to improve their livelihood.<br></br>
We would create such a ecosystem of  sellers and buyers that customer satisfaction would<br></br> be on top priority and hence we would  never compromise on the quality of product and <br></br> regulate mechanism of standardisation.
As the stability of a business increases <br></br>,then the area coverage for product delivery would increase<br></br>
</p></b>
    </div>
    <h1><b>Our Team</b></h1>
      <section className="contain">
        <div className="team">
        <div className="bg-img">
           <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0" alt="" />
          </div>
          <div className="pic">
            <img src={img6} alt="" />
          </div>
          <div className="info">
            <h3>Sritam Mahapatra</h3>
            <span>Backend Developer</span>
            <div className="iconsabt">
             <a href="#"><FaInstagram/></a>
             <a href="#"><FaFacebook/></a>
             <a href="#"><FaTwitter/></a>
             <a href="#"><FaGithub/></a>
            </div>
          </div>
          
        </div>
        <div className="team">
        <div className="bg-img">
           <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0" alt="" />
          </div>
          <div className="pic">
            <img src={img5} alt="" />
          </div>
          <div className="info">
            <h3>Priyanka Senapati</h3>
            <span>Manager, Developer</span>
            <div className="iconsabt">
             <a href="#"><FaInstagram/></a>
             <a href="#"><FaFacebook/></a>
             <a href="#"><FaTwitter/></a>
             <a href="#"><FaGithub/></a>
            </div>
          </div>
          
        </div>
        <div className="team">
        <div className="bg-img">
           <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0" alt="" />
          </div>
          <div className="pic">
            <img src={img7} alt="" />
          </div>
          <div className="info">
            <h3>Lipsa P. Mohanty</h3>
            <span>UI/UX Designer</span>
            <div className="iconsabt">
             <a href="#"><FaInstagram/></a>
             <a href="#"><FaFacebook/></a>
             <a href="#"><FaTwitter/></a>
             <a href="#"><FaGithub/></a>
            </div>
          </div>
          
        </div>
        <div className="team">
          <div className="bg-img">
           <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0" alt="" />
          </div>
          <div className="pic">
            <img src={img8} alt="" />
          </div>
          <div className="info">
            <h3>Pallavi Sahoo</h3>
            <span>Frontend Developer</span>
            <div className="iconsabt">
             <a href="#"><FaInstagram/></a>
             <a href="#"><FaFacebook/></a>
             <a href="#"><FaTwitter/></a>
             <a href="#"><FaGithub/></a>
            </div>
          </div>
          
        </div>
      </section>
      </div>
 </>
  )
}

export default About
