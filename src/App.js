import React from 'react';
import { createUseStyles } from 'react-jss';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Message from './components/Message';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
    <div className="container">
      <Navbar />
      <Profile />
      <Contact />
      <Message />
    </div>
    <Footer/>
    </div>


  );
}

export default App;

