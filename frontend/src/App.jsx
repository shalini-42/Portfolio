import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/NavBar/NavBar';

import Footer from './components/Footer';

import Contact from './components/Contact';
import Project from './components/Project/Project';
import SkillCard from './components/SkillCard/SkillCard';
import Card from './components/Card';
import HomePage from './pages/Home/HomePage';


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