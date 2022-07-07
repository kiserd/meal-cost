import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header'
import Webpages from './pages/index'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/dummy').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div>
      <Webpages />
    </div>
  );
}

export default App;