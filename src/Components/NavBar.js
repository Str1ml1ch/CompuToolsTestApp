import React from 'react'
import {Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'


export const NavBar = () => 
{
 return( <Navbar bg="dark" variant="dark" sticky="top"> 
    <Navbar.Brand><NavLink to="/">Personality Quiz</NavLink></Navbar.Brand>
  </Navbar>)
}