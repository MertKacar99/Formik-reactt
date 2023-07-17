import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import GeneralForm from './Components/GeneralForm'
import PortalForm from './Components/PortalForm'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GeneralForm/>}></Route>
        <Route path='/portal' element={<PortalForm/>}></Route>
      </Routes>


    </div>
  )
}

export default App
