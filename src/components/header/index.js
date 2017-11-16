import React from 'react'
import {
  Image,
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import {
  LinkContainer
} from 'react-router-bootstrap';

import './header.css';
import logo from './logo.png';

const Header = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">
          <Image src={logo} />
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header> 
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
          <NavItem eventKey={4}>Log in</NavItem>
        </LinkContainer>
      </Nav> 
    </Navbar.Collapse> 
  </Navbar>
)

export default Header