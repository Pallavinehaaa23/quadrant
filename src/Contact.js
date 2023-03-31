
import {React,useState}from 'react'
import { useHistory } from 'react-router-dom';
import { IoMdCall,IoMdAt } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
const Contact = () => {
  const contacts =useHistory("");
    const [data,setData]=useState({name:"",email:"",message:""});
    const handleChange =(e)=>{
      const name= e.target.name;
      const value =e.target.value;
      setData({...data,[name]:value})
    }
    const handleSubmit =(e)=>{
      e.preventDefault();
      contacts.push("/Thanks")
    }
  return (
<>
<div className="forms">
<div className="infos">
  <ul>
    <li><IoMdCall id='icn'/>+917735680945</li>
    <li><IoMdAt id='icn'/>+pallavisahoo263@gmail.com</li>
    <li><IoLocationSharp id='icn'/>OUTR,Ghatikia,Bhubaneswar-751003</li>
    </ul>
  </div>

<form method='post' id='contactform' onSubmit={handleSubmit}>
<h1>Contact Here</h1>
<h3>Name:</h3>
  <input type="text" name="name" id="" placeholder='name' onChange={handleChange} value={data.name}/>
  <h3>E-mail:</h3>
  <input type="email" name="email" id=""  placeholder='123@gmail.com' onChange={handleChange} value={data.email}/>
  <h3>Contact No.</h3>
  <input type="number" name="phone" id="" placeholder='+91' onChange={handleChange} value={data.phone}/>
  <h3>Message:</h3>
  <textarea name="message" id="" cols="10" rows="10" onChange={handleChange} value={data.message}/>
  <button type="submit">Send</button>
  <p>{data.name},{data.email},{data.phone},{data.message}</p>
</form>
</div>
</>
  )
}

export default Contact
