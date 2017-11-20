import React, {
  Component
} from 'react'
import {
  FormGroup,
  HelpBlock,
  FormControl,
  ControlLabel,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import {
  connect
} from 'react-redux'
import {
  updateUser
} from '../../actions/User'

function FieldGroup({
  id,
  label,
  help,
  ...props
}) {
  return (
    <FormGroup controlId={id}>
      {label && <ControlLabel>{label}</ControlLabel>}
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class SignUp extends Component {
  handleInputChange = (evt) => {
    evt.preventDefault();
    this.props.updateUser({
      [evt.target.id]: evt.target.value
    });
  }

  signUpForm() {
    return (
      <form>
          <FieldGroup
            id="firstName"
            type="text"
            placeholder="First Name"
            defaultValue={this.props.firstName} 
            onChange={this.handleInputChange}
          />
          <FieldGroup
            id="lastName"
            type="text"
            placeholder="Last Name"
            defaultValue={this.props.lastName} 
            onChange={this.handleInputChange}
          />
          <FieldGroup
            id="email"
            type="text"
            placeholder="Email"
            defaultValue={this.props.email} 
            onChange={this.handleInputChange}
          />
          <FieldGroup
            id="phone"
            type="text"
            placeholder="Phone"
            defaultValue={this.props.phone} 
            onChange={this.handleInputChange}
          />
        </form>
    );
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
    <h1>Enter your information to get a quote</h1> {
      this.signUpForm()
    }
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default connect(
  (state) => ({
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
    phone: state.user.phone
  }), {
    updateUser
  }
)(SignUp)