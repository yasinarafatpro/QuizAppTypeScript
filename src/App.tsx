import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/quiz/:userName/:language' element={<Quiz/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
