import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import SigninModal from "../SigninModal"

export default class CustomNavbar extends Component {
   render() {
      return (
         <Navbar default collapseOnSelect>
            <Navbar.Header>
               <Navbar.Brand>
                  <Link to="/">Virtual School</Link>
               </Navbar.Brand>
               <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
               <Nav pullRight>
                  <NavItem eventKey = {1} componentClass={Link} href="/" to="/">
                     Home
                  </NavItem>
                  <NavItem eventKey = {2} componentClass={Link} href="/educationarticle" to="/educationarticle">
                     Education Article
                  </NavItem>
                  <NavItem eventKey = {3} componentClass={Link} href="/sessioninvite" to="/sessioninvite">
                     Session Invite
                  </NavItem>
                  <NavItem eventKey = {4} componentClass={Link} href="/studentarticle" to="/studentarticle">
                     Student Article
                  </NavItem>
                  <NavItem eventKey = {5} componentClass={Link} href="/livesession" to="/livesession">
                     Live Session
                  </NavItem>
                  <NavItem eventKey = {6} componentClass={Link} href="/signin" to="/signin">
                     <SigninModal></SigninModal>
                  </NavItem>
                  <NavItem eventKey = {7} componentClass={Link} href="/register" to="/register">
                     Register
                  </NavItem>

               </Nav>
            </Navbar.Collapse>


         </Navbar>
      )
   }
}