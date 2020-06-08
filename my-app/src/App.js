import React, {Component} from 'react';
import './App.css';
import User from './User/User';

class App extends Component {
  // var something = 'someValue'; This is normal javascript code that doesn't work here.
  // something = 'someValue'; You can simply write this here.
  //There is a special property in any component that extends Component but you can't use it in functional components i.e state. props are set and passed from outside
  // state is managed from inside the component. But with react hooks from react 16.8 you can use state in functional components also.

  state = {
    users: [
        {name: 'Mohammed', age: 32},
        {name: 'Amina', age: 4},
        {name: 'Sara', age:1}

    ], 
    otherState: 'Some Other Value'
  }

  switchNameHandler = () => {
    //console.log("Hi from switchNameHandler");
    // Don't Do This: this.state.users[0].name = 'Mohammed Sibgathulla';
    this.setState({
      users: [
        {name: 'Mohammed Sibgathulla', age: 32},
        {name: 'Amina', age: 4},
        {name: 'Sara', age:2}

    ]
    }
      
    )
  }

  render(){
   return ( <div className="App">
      <h1> Hi, I am a React App</h1>
      <h1> You can add one more header here</h1>
      <p>This is working great ! </p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <User name={this.state.users[0].name} age={this.state.users[0].age} />
      <User name={this.state.users[1].name} age={this.state.users[1].age}> Her Hobbies: Eating, Playing. </User>
      <User name={this.state.users[2].name} age={this.state.users[2].age} />

    </div>
    //<h1>Hi</h1> We can't do this here our JSX expression must have one root element
    //React.createElement('div', null, 'h1', 'Hi I am a React App')
    //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Iam a React App')) //writing the code like this is cumbersome 
    //Hence we choose above jsx code.
   );
  }
}

export default App;
