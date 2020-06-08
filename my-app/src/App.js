import React, {Component} from 'react';
import './App.css';
import User from './User/User';

class App extends Component {
  render(){
   return ( <div className="App">
      <h1> Hi, I am a React App</h1>
      <h1> You can add one more header here</h1>
      <p>This is working great ! </p>
      <User />
      <User />
      <User />
    </div>
    //<h1>Hi</h1> We can't do this here our JSX expression must have one root element
    //React.createElement('div', null, 'h1', 'Hi I am a React App')
    //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Iam a React App')) //writing the code like this is cumbersome 
    //Hence we choose above jsx code.
   );
  }
}

export default App;
