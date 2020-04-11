import React from 'react';
import './App.css';
import Test1 from '../Test1/Test1';
import Test2 from '../Test2/Test2';
import Test3 from '../Test3/Test3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>radar chart spike</h1>
          <ol>
            <li>Show Basic Chart With Sample Data</li>
            <li>Update with Arbitrary Decrements</li>
            <li>Show Change to Data with Two Datasets</li>
            <li>Decrement Based on Varying Fractions</li>
            <li>Define Own Parameters + Metrics</li>
            <li>Try Bubble Chart</li>
            <li>Style It Up</li>
          </ol>
      </header>
      <section className="main-content">
        <Test1/>
        <Test2/>
        <Test3/>
      </section>
    </div>
  );
}

export default App;
