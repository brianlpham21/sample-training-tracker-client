import React, { Component } from 'react';
import './App.css';

import NavBar from './nav-bar';
import MainContent from './main-content';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
