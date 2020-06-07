import React from 'react';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <h1> Hi, I am a React App</h1>
    // </div>
    //React.createElement('div', null, 'h1', 'Hi I am a React App')
    React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Iam a React App')) //writing the code like this is cumbersome 
    //Hence we choose above jsx code.
  );
}

export default App;
