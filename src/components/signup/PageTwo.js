import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  updateSignUp
} from '../../actions/SignUp'

class PageTwo extends Component {
  render() {
    return (
      <div>PageTwo</div>

    )
  }
}

export default connect(
  (state) => ({
    firstName: state.signUp.firstName,
    lastName: state.signUp.lastName,
    email: state.signUp.email,
    phone: state.signUp.phone,
    page: state.signUp.page
  }), {
    updateSignUp
  }
)(PageTwo)