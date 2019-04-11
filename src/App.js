import React, { Component } from 'react';
import Header from './components/header';
import './app.scss';
import HeadLine from './components/headline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <section className="main">
          <HeadLine header="Posts" desc="Click the button to render posts"/>
        </section>
      </div>
    );
  }
}

export default App;
