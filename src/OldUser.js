
import {React,useState} from 'react'
import {auth ,app} from './firebaseConfig';
import { Link,useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
const OldUser = () => {
  const navigate= useHistory("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signin =(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
   console.log(userCredential);
   navigate.push("/ForBuyer");
    
   
  })
  .catch((error) => {
    console.log(error);
  });


    }
  return (
    <>
     <div className="bgform">
    <div className="formContainer"> 
        <h1>Sign In</h1>
        <p className="newuser">New User?<span><a href="/LoginBuyer">Create an account</a></span></p>
		<h5>Enter Credentials Here:</h5>
        <h4 className='head'>Email:</h4>
		<input type="email"
			placeholder="email here" id="email" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/>

		<br />
        <h4 className='head'>Password:</h4>
		<input type="password"
			placeholder="password here" id="password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
		<br />
<button type='submit' onClick={signin}>SignIn</button>
		
	<Link to="/LoginBuyer">	<button>SignUp</button> </Link>
  <Link to ="/Frontpg"><button>Log Out</button></Link>
	</div>
  <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="" srcset="" id="usersign"/>
  </div>
  </>
  )
}

export default OldUser
