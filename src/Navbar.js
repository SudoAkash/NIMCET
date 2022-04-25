import React from 'react';
import {Route,Routes,NavLink,HashRouter,BrowserRouter,Link} from "react-router-dom";
import Home from './Home';
import Faqs from './Faqs';
import Infromation from './Information';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouseChimney,faCalendar,faBuilding,faQuestionCircle,faPhoneFlip,faCircleInfo} from '@fortawesome/free-solid-svg-icons'
export default function Navbar(){
return (
<BrowserRouter basename='/'>
<div>
    <nav class="px-6 py-3 bg-slate-800 text-white ">
      <ul class="flex justify-center ">
      
      <li class="  font-mono  mx-6   tracking-wide  text-base font-extrabold cursor-pointer "><FontAwesomeIcon icon={faHouseChimney}/>
      <Link to="/">&nbsp;&nbsp;Home</Link></li>
    
        <li class=" font-mono mx-6 tracking-wide text-base font-extrabold cursor-pointer "><FontAwesomeIcon icon={faBuilding}/>&nbsp;&nbsp;Participating NITs</li>

        <li class=" font-mono mx-6 tracking-wide text-base font-extrabold cursor-pointer "><FontAwesomeIcon icon={faCalendar} />&nbsp;&nbsp;Important Dates</li>
      
        <li class=" font-mono mx-6 tracking-wide text-base font-extrabold cursor-pointer "><FontAwesomeIcon icon={faCircleInfo}/>
    &nbsp;&nbsp;Information Broucher</li>
     
        <li class=" font-mono mx-6 tracking-wide text-base font-extrabold cursor-pointer "><FontAwesomeIcon icon={faQuestionCircle}/>&nbsp;&nbsp;Seat Matrix</li>
     
        <li class=" font-mono mx-6 tracking-wide text-base font-extrabold cursor-pointer "><FontAwesomeIcon icon={faQuestionCircle}/>
       &nbsp;&nbsp;FAQ</li>
        
        <li class=" font-mono mx-6 tracking-wide text-base font-extrabold cursor-pointer "><FontAwesomeIcon icon={faPhoneFlip}/>&nbsp;&nbsp;Contact Us</li>
      
      </ul>
    
    </nav>
    
  </div>
</BrowserRouter>

    

   
   
    
   );
}