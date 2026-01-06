import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/NavBar/NavBar';

import Footer from './components/Footer';

import Card from './components/Card';
import Contact from './components/Contact';

import SkillCard from './components/SkillCard/SkillCard';
// import HomePage from "./pages/HomePage/HomePage";

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      <Footer/>
    </footer>
     
    
    </>
  );
}

export default App;