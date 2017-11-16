import React, {
  Component
} from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

import logo from './logo.svg';

import SignUp from './containers/signup'
import Quiz from './containers/quiz'
import Home from './containers/home'
import Login from './containers/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">For Doctors</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/log-in">Log in</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/log-in" component={Login} />
        </main>
      </div>
    );
  }
}

export default App;