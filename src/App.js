import "./App.css";

import React, { Component } from "react";

import { CardList } from './components/cardlist/card-list.component.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    // equivalent of const monster = this.state.monsters, etc.
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    ); 
    
    return (
      <div className="App">
        {/* if we want to have some action run directly after a setState, we'll need to pass a callback
        directly after in order to have it run then and there */}
        <input type='search' placeholder='Search monsters' onChange={e => this.setState({ searchField: e.target.value })}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
