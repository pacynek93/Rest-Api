import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from '../Router/Home';
import EditUser from '../Router/EditUser';
import AddUser from '../AddUser/AddUser';

const Root = () => (
  <BrowserRouter>
    <div className='hello'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/user/add'>Add User</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/add' component={AddUser} />
        <Route exact path='/user/:id' component={EditUser} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Root;
