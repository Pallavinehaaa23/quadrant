import React from 'react'
import { FaInstagram,FaFacebook,FaWhatsapp,FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <footer>
        <div className="row">
            <div className="col">
<p>why growbazzar?</p>
<p>why do we need growbazzar?FAQ</p>
<p>All you need to know about growbazzar</p>
<p>Growbazzar is a website that deals with the local seller and buyers
    and acts as a interconnecting between them .our website acts as a third party 
    that helps in connecting local ecosystem </p>

 </div>
            <div className="col"> 
                <h3>OFFICE ADDRESS</h3>
                <p>Main Building Address</p>
                <p>jahangir building ,3rd floor</p>
                <p>shaheednagar Bbsr</p>
                <p class="email">growbazzarpvtltd@gmail.com</p>
                
             </div>
            <div className="col" id="list">
                <h3>links</h3>
                <ul >
                    <li>home</li>
                    <li>about</li>
                    <li>seller</li>
                    <li>buyer</li>
                    <li>contact us</li>
                </ul>
            </div>
            <div className="col" id="icons">
                <ul>
                    <li><FaInstagram/></li>
                    <li><FaFacebook/></li>
                    <li><FaWhatsapp/></li>
                    <li><FaTwitter/></li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="copyright">copyright-all right reserved</p>
    </footer> 
    </>
  )
}

export default Footer