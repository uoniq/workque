import React from 'react'
import 'materialize-css'
import KommunicateChat from './chat'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <div className="main">
      <Navbar/>
      <KommunicateChat/>
      <Footer/>
    </div>
  );
}

export default App
