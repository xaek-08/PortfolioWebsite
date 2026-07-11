import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Card from './components/cards'
import Home from './pages/home'
import ProjectsPage from './pages/projects'
import {Routes,Route,Navigate} from 'react-router-dom'

function App() {
  return(
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/projects' element={<ProjectsPage/>}></Route>
    </Routes>
    
  )
  
}

export default App
