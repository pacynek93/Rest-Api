import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from '../Router/Home';
import EditUser from '../Router/EditUser';
import AddUser from '../AddUser/AddUser';
import './Root.scss';

const Root = () => (
  <BrowserRouter>
    <div className='hello'>
      <nav className='navBar'>
        <Link className='navBarItem' to='/'>Home</Link>
        <Link className='navBarItem' to='/user/add'>Add User</Link>

      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/add' component={AddUser} />
        <Route exact path='/user/:id' component={EditUser} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Root;
