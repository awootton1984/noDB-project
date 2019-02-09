import React, { Component } from 'react';

import axios from 'axios';
import './App.css';

class App extends Component {
  constructor (){
    super()

    this.state = {
      skiers: []
    }
  }

componentDidMount() {
axios.get('/api/skiers').then(res => {
  console.log(res.data)
  this.setState({
    skiers: res.data
  })
})
}

createSkier

  render() {
    const mappedSkiers = this.state.skiers.map(skier => {
      return (
        <div key={skier.id}>
          <h2>{skier.name}</h2>
          <p>{skier.type}</p>
          <p>{skier.status}</p>
        </div>
      )
    })
    return (
      <div className="App">
        <h1>Ski Lodge</h1>
        {mappedSkiers}
      </div>
    );
  }
}

export default App;
