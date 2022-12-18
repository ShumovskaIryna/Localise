import React from 'react';
import './App.css';
import i18next from 'i18next';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import NavBar from './Pages/NavBar';

function App() {
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <button className='lang' onClick={()=>handleClick('en')} >
        English
      </button>
      <button className='lang' onClick={()=>handleClick('ua')} >
        Українська
      </button>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;