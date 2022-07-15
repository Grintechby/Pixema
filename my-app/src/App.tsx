import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ButtonPrimary from './components/Buttons/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from './components/Buttons/ButtonSecondary/ButtonSecondary';
import Filters from './components/Filters/Filters';



function App() {
  return (
    <>
    <Filters />
      {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<AboutUser />} />
    </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
