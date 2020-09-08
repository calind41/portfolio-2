import React, { useState, useEffect } from 'react';
import './App.css';
import Intro from './components/Intro/Intro'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  const [m, setM] = useState(localStorage.getItem('mode'));
  useEffect(() => {
    if (localStorage.getItem('mode') === 'dark') {
      document.body.style.backgroundColor = '#192734'
    } else {
      document.body.style.backgroundColor = '#fff'
    }
  }, [])
  useEffect(() => {
    if (m !== '') {
      document.body.style.backgroundColor = m === 'dark' ? '#192734' : '#fff'
      localStorage.setItem('mode', m);
    }

  }, [m])

  const passMode = mode => {
    setM(mode);
  }

  return (
    <>
      <Intro mode={m === null ? 'light' : m} passMode={passMode} />
      <Main mode={m == null ? 'light' : m} />
      <Footer mode={m == null ? 'light' : m} />
    </>
  );
}

export default App;
