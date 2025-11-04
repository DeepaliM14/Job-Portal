import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Applyjob from './pages/Applyjob';
import Home from './pages/Home';
import Applications from './pages/Applications';


const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/application' element={<Applications/>}/>
      <Route path='/applyjob' element={<Applyjob/>}/>
      </Routes>
    </div>
  )
}

export default App
