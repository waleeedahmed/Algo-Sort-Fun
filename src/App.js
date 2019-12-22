import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Algobody from './containers/Algobody/Algobody';

class App extends Component {
  render() {
    return (
        <div>
          <Layout>
            <Algobody/>
          </Layout>
        </div>
    );
  }
}

export default App;
