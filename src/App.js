import React, {
  Component
} from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import SignUp from './containers/signup'
import Home from './containers/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="/sign-up">Sign Up</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
        </main>
      </div>
    );
  }
}

export default App;