import React, { Component } from 'react';
import { Link } from 'gatsby';
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
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

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Les activités</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>Pour nos adhérents</DropdownItem>
                <DropdownItem tag={Link} to="/sorties">Les sorties</DropdownItem>
                <DropdownItem header>Pour tout le monde</DropdownItem>
                <DropdownItem tag={Link} to="/rando-gourmande">La rando gourmande</DropdownItem>
                <DropdownItem tag={Link} to="/rando-de-nuit">Les randos de nuit</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

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
