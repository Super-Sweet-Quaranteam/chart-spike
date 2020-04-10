import React from 'react';
import './App.css';
import Chart1 from '../Chart1/Chart1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>radar chart spike</h1>
          <ol>
            <li>show chart on page</li>
            <li>show chart on page with hardcoded parameters of choice</li>
            <li>update chart with hardcoded increments of choice</li>
            <li>use variable parameters</li>
            <li>use variable increments</li>
            <li>try bubble chart</li>
            <li>style chart</li>
          </ol>
      </header>
      <section className="main-content">
        <Chart1/>
      </section>
    </div>
  );
}

export default App;
