import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Page from './Page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      lang: 'pl',
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Page lang={this.state.lang} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
