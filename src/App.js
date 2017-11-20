import React, {
  Component
} from 'react';
import {
  Route
} from 'react-router-dom';



import SignUp from './components/signup'
import Quiz from './components/quiz'
import Home from './components/home'
import Login from './components/login'
import Doctor from './components/doctor'
import Header from './components/header'
import Dashboard from './components/dashboard'
import Portal from './components/portal'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/doctor" component={Doctor} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/log-in" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/portal" component={Portal} />
        </main>
      </div>
    );
  }
}

export default App;