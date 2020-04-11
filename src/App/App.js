import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import Test1 from '../Test1/Test1';
import Test2 from '../Test2/Test2';
import Test3 from '../Test3/Test3';
import Test4 from '../Test4/Test4';



function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <h1>radar chart spike</h1>
          <ol>
            <li><Link className="link" to="/test1">Show Basic Chart With Sample Data</Link></li>
            <li><Link className="link" to="/test2">Update with Arbitrary Decrements</Link></li>
            <li><Link className="link" to="/test3">Show Change to Data with Two Datasets</Link></li>
            <li><Link className="link" to="/test4">Decrement Based on Varying Fractions</Link></li>

            <li>Define Own Parameters + Metrics</li>
            <li>Try Bubble Chart</li>
            <li>Style It Up</li>
          </ol>
      </header>
      <section className="main-content">
        <Route path="/test1" component={Test1}/>
        <Route path="/test2" component={Test2}/>
        <Route path="/test3" component={Test3}/>
        <Route path="/test4" component={Test4} />
              
      </section>
      </Router>
    </div>
  );
}

export default App;
