import React, {
  Component
} from 'react'
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import {
  connect
} from 'react-redux'
import SignUpPageOne from './PageOne'
import SignUpPageTwo from './PageTwo'


class SignUp extends Component {


  getPage() {
    switch (this.props.page) {
      case 2:
        return <SignUpPageTwo />;
      case 1:
      default:
        return <SignUpPageOne />;
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <h1>Lets get you started</h1>
            <p>We promise this wont take long</p> 
          </Col>
        </Row>
            {this.getPage()}
      </Grid>
    );
  }
}


export default connect(
  (state) => ({
    page: state.signUp.page
  }), {}
)(SignUp)