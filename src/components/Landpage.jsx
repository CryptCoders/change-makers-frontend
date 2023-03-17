


import React from 'react'
import Home from './Home';
import Navbarw from './Navbar';
// import TemplateContainer from './components/TemplateContainer';
import TemplateBody from './TemplateBody';
// import Events from './components/Events';


function Landpage() {
  return (
    <div>
      <Navbarw/>
      <Home/>
      <TemplateBody/>
      {/* <Events/> */}
    </div>
  )
}

export default Landpage;

