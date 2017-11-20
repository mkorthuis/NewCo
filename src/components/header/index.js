import React, {
  Component
} from 'react'
import {
  Image,
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import {
  LinkContainer
} from 'react-router-bootstrap';
import {
  signOut
} from '../../reducers/User'
import {
  connect
} from 'react-redux'

import './header.css';
import logo from './logo.png';

class Header extends Component {

  handleSignOut = (evt) => {
    this.props.signOut();
  }

  authenticatedNavbar() {
    return (
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={this.handleSignOut} eventKey={4}>Signout</NavItem>
        </Nav> 
      </Navbar.Collapse>
    )
  }

  unauthenticatedNavbar() {
    return (
      <Navbar.Collapse >
        <Nav pullRight>
          <LinkContainer to="/doctor">
            <NavItem eventKey={1}>For Doctors</NavItem>
          </LinkContainer>
          <LinkContainer to="/quiz">
            <NavItem eventKey={2}>Quiz</NavItem>
          </LinkContainer>
          <LinkContainer to="/sign-up">
            <NavItem eventKey={3}>Get Free Quote</NavItem>
          </LinkContainer>
          <LinkContainer to="/log-in">
            <NavItem eventKey={5}>Log in</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    )
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
              <Image src={logo} />
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header> 
        { this.props.authenticated ? 
          this.authenticatedNavbar() : 
          this.unauthenticatedNavbar() }
      </Navbar>
    )
  }
}


export default connect(
  (state) => ({
    authenticated: state.user.authenticated
  }), {
    signOut
  }
)(Header)