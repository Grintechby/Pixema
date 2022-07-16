import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Registration/SignUp';




function App() {
  return (
    <>
      {/* <SignUp /> */}
      <SignIn />
      {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<AboutUser />} />
    </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
