import React, { Component } from 'react';
import './App.css';
import { getApi } from './utils/queryUtils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    getApi('/api/todos', (response) => {
      this.setState({
        messages: response,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React App + ASP.NET Core</h1>
        {
          this.state.loading ?
            /* please don't use marquee */
            <marquee>Loading</marquee> :
            this.state.messages.map(m =>
              <div className="card">
                <h4>{m.name}</h4>
                <p>{m.description}</p>
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
