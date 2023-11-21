import React from 'react';
import logo from './logo.svg';
import './App.css';

import "./assets/fonts/Montserrat.ttf";

import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

const App = () => {
  return(
    <div className='wrapper'>
      <Header />
      <Section title='New releases' subtitle='check them out ✨'/>
      <Section title="vid.io's favourites" subtitle="voice of community 💪"/>
      <Footer />
    </div>
    
  )
}

export default App;
