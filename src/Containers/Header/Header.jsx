import React from 'react';
import Typewriter from "typewriter-effect";

import './Header.scss'

function Header() {
  return (
    <div  id='header-id' className="header">
    <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("<span>Welcome</span>")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("<span>Welcome to Maya Henna</span>")
       .start();
       }}
    />
    </div>
  )
}

export default Header;