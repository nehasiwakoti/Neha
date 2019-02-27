import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person'

class App extends Component {
  friends=[
    {name:'Ram karki' , adress:'jhapa',contact:'9867554567'},
    {name:'Sita thapa' , adress:'morang',contact:'987676544'},
    {name:'Gita magar', adress:'dharan',contact:'987654321'},
    {name:'Hari Khadka', adress:'sunsari',contact:'9876543210'}

  
];
  render() {
    return (
      <div className="basic">
      <h3> Details of my friends</h3>
      {
        this.friends.map(friend=> 
          <Person name={friend.name}
          contact={friend.contact}
          adress={friend.adress}
          />)
      }
      </div>
    );
  }
}

export default App;
