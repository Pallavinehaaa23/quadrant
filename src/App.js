import React from 'react'
import  './App.css';
import Profile from './Profile';
import NavBar from './NavBar';
import Viewpro from './Viewpro';
import Frontpg from './Frontpg';
import About from './About';
import Translator from './Translator';
import {Route,Switch,Redirect} from 'react-router-dom';
import ForBuyer from './ForBuyer';
import LoginBuyer from './LoginBuyer';
import OldUser from './OldUser';
import SignSeller from './SignSeller';
import RegSeller from './RegSeller';
import ForSeller from './ForSeller';
import Pay from './Pay';
import Thanks from './Thanks';
import Nutrient from './Nutrient';
import Footer from './Footer';
import Contact from './Contact';

const App = () => {
  return (
    <>
   <Translator/>
    <NavBar />
    
   
     <Switch>
     <Route exact path="/"  component={Frontpg}/>
      <Route exact path="/About"  component={About}/>
      <Route exact path="/ForBuyer"  component={ForBuyer}/>
      <Route exact path="/ForSeller"  component={ForSeller}/>
      <Route exact path="/Pay"  component={Pay}/>
      <Route exact path="/Contact"  component={Contact}/>
      <Route exact path="/Viewpro"  component={Viewpro}/>
      <Route exact path="/LoginBuyer"  component={LoginBuyer}/>
      <Route exact path="/OldUser"  component={OldUser}/>
      <Route exact path="/RegSeller"  component={RegSeller}/>
      <Route exact path="/SignSeller"  component={SignSeller}/>
      <Route exact path="/Nutrient"  component={Nutrient}/>
      <Route exact path="/Profile"  component={Profile}/>
      <Route exact path="/Thanks"  component={Thanks}/>
      <Redirect to= "/"/>
     </Switch>

   <Footer/>
   
    </>
  )
}

export default App
