import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import HomePage from '../HomePage/HomePage';
import EditUser from '../EditUser/EditUser';
import AddUser from '../AddUser/AddUser';
import ShowPosts from '../ShowPosts/ShowPosts';
import ShowUserInfo from '../ShowUserInfo/ShowUserInfo';
import EditPost from '../EditPost/EditPost';
import ShowComments from '../ShowComments/ShowComments';
import EditComment from '../EditComment/EditComment';
import AddPost from '../AddPost/AddPost';
import AddComment from '../AddComment/AddComment';
import './Root.scss';

const Root = () => (
  <BrowserRouter>
    <div className='hello'>
      <nav className='navBar'>
        <Link className='navBarItem' to='/'>Home</Link>
        <Link className='navBarItem' to='/user'>ShowData</Link>
        <Link className='navBarItem' to='/post'>Post List</Link>
        <Link className='navBarItem' to='/comments'>User Comments</Link>

      </nav>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/user' component={ShowUserInfo} />
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
