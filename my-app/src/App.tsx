import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CardsList from './components/CardsList/CardsList';
import MainTemplate from './components/MainTemplate/MainTemplate';


function App() {
  return (
    <>
      <MainTemplate>
        <CardsList />
      </MainTemplate>
      {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<AboutUser />} />
    </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
