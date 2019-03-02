import React, { Component } from 'react';
import { Link } from 'gatsby';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class Navigation extends Component {
  state = { isOpen: false };

  toggle = () => this.setState(({ isOpen: wasOpen }) => ({ isOpen: !wasOpen }));

  render () {
    const { isOpen } = this.state;
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Limacs VTT</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Accueil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/ecole-vtt">École VTT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/manifestations">Manifestations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/espace-vtt">Espace VTT/FFC</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
