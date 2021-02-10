import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from '../Router/Home';
import EditUser from '../Router/EditUser';

const Root = () => (
  <BrowserRouter>
    <div className='/'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
      <Route exact path='/' component={Home} />
      <Route path='/user/:id' component={EditUser} />
    </div>
  </BrowserRouter>

);

export default Root;
