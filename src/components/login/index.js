import React, {
  Component
} from "react";
import {
  connect
} from 'react-redux'
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import {
  authenticate,
  updateUser
} from '../../actions/User'

class Login extends Component {

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.authenticate(this.props.username, this.props.password);
  }

  handleInputChange = (evt) => {
    evt.preventDefault();
    this.props.updateUser({
      [evt.target.id]: evt.target.value
    });
  }

  loginForm() {
    const {
      username,
      password
    } = this.props;
    return (
      <form onSubmit = {this.handleSubmit}>
        <FormGroup controlId="username">
          <ControlLabel>Username</ControlLabel>
          <FormControl 
            componentClass="input" 
            defaultValue={username} 
            onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup controlId="password">
          <ControlLabel>Password</ControlLabel>
          <FormControl 
            componentClass="input" 
            type="password" 
            defaultValue={password}
            onChange={this.handleInputChange} />
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </form>
    );
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={6} mdOffset={6} >
            <h1>Customers signin here</h1>
            {this.loginForm()}
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default connect(
  (state) => ({
    username: state.user.username,
    password: state.user.password,
    authenticated: state.user.authenticated
  }), {
    authenticate,
    updateUser
  }
)(Login)