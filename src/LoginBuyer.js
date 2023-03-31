import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {db} from './firebaseConfig'
import {addDoc,collection} from 'firebase/firestore'
import {auth ,app} from './firebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';

function LoginBuyer() {
    const [name,setName]=useState("");
    const [company,setCompany]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [message,setMessage]=useState("");
    const navigate =useHistory();
    const userCollectionRef =collection(db,"logindata");
    const handleSubmit =(e)=>{
     e.preventDefault();
    
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
       console.log(userCredential);
        navigate.push("/ForBuyer");
      })
      .catch((error) => {
        console.log(error);
      });
    
      addDoc(userCollectionRef,{
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message,
      })
    }
  return (
    
    <>
    <div class="container">
    <h1 class="brand"><span>Buyer</span> Info</h1>
    <div class="wrapper">
      <div class="company-info">
       
       
      </div>
      <div className="contact">
        <h3>Email Us</h3>
        <div className="alert">Your message has been sent</div>
        <form id="contactForm">
          <p>
            <label>Name</label>
            <input type="text" name="name" id="name" required onChange={(event)=>{
                setName(event.target.value);
            }}/>
          </p>
          <p>
            <label>ID Proof</label>
            <input type="number" name="company" id="company"
            onChange={(event)=>{
                setCompany(event.target.value);
            }}/>
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email" id="email" required
            onChange={(event)=>{
                setEmail(event.target.value);
            }}/>
          </p>
          <p>
            <label>Password</label>
            <input type="password" name="password" id="password" required
            onChange={(event)=>{
                setPassword(event.target.value);
            }}/>
          </p>
          
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" id="phone"
            onChange={(event)=>{
                setPhone(event.target.value);
            }}/>
          </p>
          <p className="full">
            <label>Message</label>
            <textarea name="message" rows="5" id="message"
            onChange={(event)=>{
                setMessage(event.target.value);
            }}></textarea>
          </p>
          <p className="full">
            <button type='submit' onClick={handleSubmit}>Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>

    </>
  )
}

export default LoginBuyer
