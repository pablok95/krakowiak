import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Page />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
