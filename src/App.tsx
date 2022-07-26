import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeView from './components/pages/HomeView/HomeView';
import Favorites from './components/pages/Favorites/Favorites';
import Navbar from './components/Navbar';
import {MovieProvider} from "./components/store/movieContext"

function App() {
  return (
    <div className="app">
      <MovieProvider >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </div>
  );
}

export default App;
