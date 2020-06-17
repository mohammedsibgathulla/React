import React, {Component} from 'react';
import './App.css';
import User from './User/User';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

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
    otherState: 'Some Other Value', 
    username: 'mohammedsibgathulla',
  }

  switchNameHandler = (newName) => {
    //console.log("Hi from switchNameHandler");
    // Don't Do This: this.state.users[0].name = 'Mohammed Sibgathulla';
    this.setState({
      users: [
        {name: newName, age: 32},
        {name: 'Amina', age: 4},
        {name: 'Sara', age:2}

    ]
    }
      
    )
  }

  nameChangeHandler = (event) => {
    //console.log("Hi from switchNameHandler");
    // Don't Do This: this.state.users[0].name = 'Mohammed Sibgathulla';
    this.setState({
      users: [
        {name: "Mohammed", age: 32},
        {name: event.target.value, age: 4},
        {name: 'Sara', age:2}

    ]
    }
      
    )
  }

  changeUsernameHandler = (event) => {

    this.setState({
    username: event.target.value
  })

  }

  toggleUserHandler = () => {
    const doesShow = this.state.showUsers;
    this.setState({
      showUsers: !doesShow
    }); 
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let users = null;

    if(this.state.showUsers) {
      users = (
        <div>
          {this.state.users.map(user => {
            return <User 
              name={user.name}
              age={user.age}
            />
          })}
 
      </div>
      );
    }
   return ( <div className="App">
      <h1> Hi, I am a React App</h1>
      <h1> You can add one more header here</h1>
      <p>This is working great ! </p>
      <button style={style} onClick={this.toggleUserHandler}>Toggle Users</button>
      {users}

      <hr />
      <label>Assignment</label>
      <UserInput currentname={this.state.username} changeusername={this.changeUsernameHandler}/>
      <UserOutput username={this.state.username}/>
      <UserOutput username={this.state.username}/>
      <UserOutput username={'shaikamina'}/>
      

    </div>
    //<h1>Hi</h1> We can't do this here our JSX expression must have one root element
    //React.createElement('div', null, 'h1', 'Hi I am a React App')
    //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Iam a React App')) //writing the code like this is cumbersome 
    //Hence we choose above jsx code.
   );
  }
}

export default App;
