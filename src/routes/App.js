import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Page from './Page';
import Navigation from '../layout/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'pl',
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Navigation lang={this.state.lang} />
          <Page lang={this.state.lang} />
          <Footer lang={this.state.lang} />
        </Router>
      </div>
    );
  }
}

export default App;
