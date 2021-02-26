import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import HomePage from '../screens/HomePage/HomePage';
import EditUser from '../screens/User List/EditUser/EditUser';
import AddUser from '../screens/User List/AddUser/AddUser';
import ShowPosts from '../screens/User Posts/ShowPosts/ShowPosts';
import ShowData from '../screens/User List/ShowData/ShowData';
import EditPost from '../screens/User Posts/EditPost/EditPost';
import ShowComments from '../screens/User Comments/ShowComments/ShowComments';
import EditComment from '../screens/User Comments/EditComment/EditComment';
import AddPost from '../screens/User Posts/AddPost/AddPost';
import AddComment from '../screens/User Comments/AddComment/AddComment';
import './Root.scss';

const Root = () => (
  <BrowserRouter>
    <div className='hello'>
      <nav className='navBar'>
        <Link className='navBarItem' to='/'>Home</Link>
        <Link className='navBarItem' to='/user'>User List</Link>
        <Link className='navBarItem' to='/post'>Post List</Link>
        <Link className='navBarItem' to='/comments'>User Comments</Link>

      </nav>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/user' component={ShowData} />
        <Route exact path='/user/add' component={AddUser} />
        <Route exact path='/user/:id' component={EditUser} />
        <Route exact path='/post' component={ShowPosts} />
        <Route exact path='/post/add' component={AddPost} />
        <Route exact path='/post/:id' component={EditPost} />
        <Route exact path='/comments' component={ShowComments} />
        <Route exact path='/comments/add' component={AddComment} />
        <Route exact path='/comments/:id' component={EditComment} />


      </Switch>
    </div>
  </BrowserRouter>

);

export default Root;
