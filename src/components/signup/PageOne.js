import React, {
  Component
} from 'react'
import {
  FormGroup,
  HelpBlock,
  FormControl,
  ControlLabel,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import {
  connect
} from 'react-redux'
import {
  updateSignUp
} from '../../actions/SignUp'
import FieldGroup from '../shared/forms/FieldGroup'


class PageOne extends Component {
  handleInputChange = (evt) => {
    evt.preventDefault();
    this.props.updateSignUp({
      [evt.target.id]: evt.target.value
    });
  };

  handleSubmitPageOne = (evt) => {
    this.props.updateSignUp({
      page: 2
    })
  }

  specialities = [
    'Immunologist',
    'Anesthesiologist',
    'Cardiologist',
    'Dermatologist',
    'Gastroenterologist',
    'Hematologist',
    'Internal Medicine',
    'Nephrologist',
    'Neurologist',
    'Neurosurgeon',
    'Obstetrician',
    'Gynecologist',
    'Ophthalmologist',
    'Oral and Maxillofacial Surgeon',
    'Orthopaedic Surgeon',
    'Otolaryngologist',
    'Pathologist',
    'Pediatrician',
    'Plastic Surgeon',
    'Podiatrist',
    'Psychiatrist',
    'Pulmonary Medicine Physician',
    'Radiation Oncologist',
    'Diagnostic Radiologist',
    'Rheumatologist',
    'Urologist'
  ];

  render() {
    return (
      <form  onSubmit = {this.handleSubmitPageOne}>
        <Row>
          <Col md={6}>
          <FieldGroup
            id="firstName"
            type="text"
            placeholder="First Name"
            defaultValue={this.props.firstName} 
            onChange={this.handleInputChange}
          />
          </Col>
          <Col md={6}>
          <FieldGroup
            id="lastName"
            type="text"
            placeholder="Last Name"
            defaultValue={this.props.lastName} 
            onChange={this.handleInputChange}
          />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FieldGroup
              id="email"
              type="text"
              placeholder="Email"
              defaultValue={this.props.email} 
              onChange={this.handleInputChange}
            />
          </Col>
          <Col md={6}>
            <FieldGroup
              id="phone"
              type="text"
              placeholder="Phone"
              defaultValue={this.props.phone} 
              onChange={this.handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FieldGroup
              id="phone"
              type="text"
              placeholder="NPI"
              defaultValue={this.props.npi}
              onChange={this.handleInputChange}
            />
          </Col>
          <Col md={6}> 
            <FormGroup
              controlId="speciality">
              <FormControl componentClass="select" placeholder="select" onChange={this.handleInputChange}>
                <option value="">Specialty</option>
                {
                  this.specialities.map((speciality, index) => {
                    return (<option key={index} value={speciality}>{speciality}</option>);
                  })
                }
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Button type="submit">
          Submit
        </Button>
        </form>
    )
  }
}

export default connect(
  (state) => ({
    firstName: state.signUp.firstName,
    lastName: state.signUp.lastName,
    email: state.signUp.email,
    phone: state.signUp.phone,
    npi: state.signUp.npi,
    speciality: state.signUp.speciality
  }), {
    updateSignUp
  }
)(PageOne)