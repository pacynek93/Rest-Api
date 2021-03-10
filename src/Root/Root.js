import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import HomePage from '../screens/HomePage/HomePage';
import EditUser from '../screens/user-list/EditUser/EditUser';
import AddUser from '../screens/user-list/AddUser/AddUser';
import ShowPosts from '../screens/user-posts/ShowPosts/ShowPosts';
import ShowData from '../screens/user-list/ShowData/ShowData';
import EditPost from '../screens/user-posts/EditPost/EditPost';
import ShowComments from '../screens/user-comments/ShowComments/ShowComments';
import EditComment from '../screens/user-comments/EditComment/EditComment';
import AddPost from '../screens/user-posts/AddPost/AddPost';
import AddComment from '../screens/user-comments/AddComment/AddComment';
import ShowTodos from '../screens/user-todos/ShowTodos/ShowTodos';
import EditTodos from '../screens/user-todos/EditTodos/EditTodos';
import './Root.scss';


const Root = () => (
  <BrowserRouter>
    <div className='hello'>
      <nav className='navBar'>
        <Link className='navBarItem' to='/'>Home</Link>
        <Link className='navBarItem' to='/user'>User List</Link>
        <Link className='navBarItem' to='/post'>Post List</Link>
        <Link className='navBarItem' to='/comments'>User Comments</Link>
        <Link className='navBarItem' to='/todos'>User Todos</Link>

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
        <Route exact path='/todos' component={ShowTodos} />
        <Route exact path='/todos/:id' component={EditTodos} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Root;
