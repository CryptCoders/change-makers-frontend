
import './App.css';

import React from 'react'
import Body from './components/Body';
import Navbarw from './components/Navbar';
// import TemplateContainer from './components/TemplateContainer';
import TemplateBody from './components/TemplateBody';
import Events from './components/Events';

function App() {
  return (
    <div>
      <Navbarw/>
      <Body/>
      <TemplateBody/>
      <Events/>
    </div>
  )
}

export default App

