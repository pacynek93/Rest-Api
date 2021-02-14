import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import HomePage from '../HomePage/HomePage';
import EditUser from '../EditUser/EditUser';
import AddUser from '../AddUser/AddUser';
import ShowPosts from '../ShowPosts/ShowPosts';
import ShowUserInfo from '../ShowUserInfo/ShowUserInfo';
import './Root.scss';

const Root = () => (
  <BrowserRouter>
    <div className='hello'>
      <nav className='navBar'>
        <Link className='navBarItem' to='/'>Home</Link>
        <Link className='navBarItem' to='/user'>ShowData</Link>
        <Link className='navBarItem' to='/user/add'>Add User</Link>
        <Link className='navBarItem' to='/post'>Post List</Link>

      </nav>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/user' component={ShowUserInfo} />
        <Route exact path='/user/add' component={AddUser} />
        <Route exact path='/user/:id' component={EditUser} />
        <Route exact path='/post' component={ShowPosts} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Root;
