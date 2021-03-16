import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';


const NavBar = () => (
  <nav className='navBar'>
    <Link className='navBarItem' to='/'>Home</Link>
    <Link className='navBarItem' to='/user'>User List</Link>
    <Link className='navBarItem' to='/post'>Post List</Link>
    <Link className='navBarItem' to='/comments'>User Comments</Link>
    <Link className='navBarItem' to='/todos'>User Todos</Link>

  </nav>
);





export default NavBar;

