import React from 'react'
import {
  FormGroup,
  HelpBlock,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

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


const SignUp = () => (
  <div>
    <h1>Enter your information to get a quote</h1>
    <form>
      <FieldGroup
        id="firstName"
        type="text"
        placeholder="First Name"
      />
      <FieldGroup
        id="lastName"
        type="text"
        placeholder="Last Name"
      />
      <FieldGroup
        id="email"
        type="text"
        placeholder="Email"
      />
      <FieldGroup
        id="phone"
        type="text"
        placeholder="Phone"
      />
    </form>

  </div>
)

export default SignUp