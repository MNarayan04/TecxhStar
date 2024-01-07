import React,{ useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './Component/Header'


import "./Style/App.scss"
import "./Style/header.scss"
import Home from './Component/Home'
import Footer from './Component/Footer'
import Contact from './Component/Contact'
import Servies from './Component/Servies'
import './Style/media.scss'


function App() {
  

  return (
    <>
      <Router>
       <Header/>


        <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element={<Servies/>} />

        </Routes>
        <Footer/>
      </Router>


    </>
  )
}

export default App
