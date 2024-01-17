import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import "./assets/fonts/Montserrat.ttf";

import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import MainView from './components/Pages/MainView/MainView';

import sampleMovies from './assets/sampleMovies.json';
import MovieDetailsView from './components/Pages/MovieDetailsView/MovieDetailsView';
import AddMovieView from './components/Pages/AddMovieView/AddMovieView';
import LoginView from './components/Pages/LoginView/LoginView';
import RegisterView from './components/Pages/RegisterView/RegisterView';

const App = () => {
  return(
    <div className='wrapper'>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<MainView />}  />
            <Route path='/add' element={<AddMovieView />} />
            <Route path='/details/:id' element={<MovieDetailsView />} />
            <Route path='/login' element={<LoginView />} />
            <Route path='/register' element={<RegisterView />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
    
  )
}

export default App;
