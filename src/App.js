
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Landpage from './components/Landpage';
import Form from './components/Form';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landpage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
