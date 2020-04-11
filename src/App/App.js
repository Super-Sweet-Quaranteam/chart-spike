import React from 'react';
import './App.css';
import Test1 from '../Test1/Test1';
import Test2 from '../Test2/Test2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>radar chart spike</h1>
          <ol>
            <li>Show Basic Chart With Sample Data</li>
            <li>show chart on page with hardcoded parameters of choice</li>
            <li>update chart with hardcoded increments of choice</li>
            <li>use variable parameters</li>
            <li>use variable increments</li>
            <li>try bubble chart</li>
            <li>style chart</li>
          </ol>
      </header>
      <section className="main-content">
        <Test1/>
        <Test2 />

      </section>
    </div>
  );
}

export default App;
