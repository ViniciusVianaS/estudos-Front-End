import './App.css';
import Cursos from './components/Cursos';
import Main from './components/Main';
import Topics from './components/Topics';
//import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='header-left'>
          <h2 className='title'>Digital College</h2>
          <nav className='navbar'>
            <ul>
              <li><a>Quem Somos</a></li>
              <li><a>Nossos Cursos</a></li>
              <li><a>Para Empresas</a></li>
              <li><a>Projetos</a></li>
              <li><a>Conteúdos</a></li>
              <li><a>Unidades</a></li>
              <li><a>Mais</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <Main />
      <Cursos />
      <Topics />
    </div>
  );
}

export default App;
