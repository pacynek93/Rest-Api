import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { postsUrl, config } from '../../../Token/Token';
import 'semantic-ui-css/semantic.min.css';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';
import './ShowPosts.scss'



const ShowPosts = () => {

  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);


  const getPostList = () => {
    axios.get(postsUrl)
      .then(response => {
        setPostList(response.data.data);
        setLoading(false);
      });
  };

  const removePost = (id) => {
    axios.delete(`${postsUrl}/${id}`, config)
    .then(() => {
    getPostList();
  });
  };

  useEffect(() => {
    getPostList();
  }, []);

  const mapPostData = () => postList.map(item => (
    <div key={item.id}>
    <table className='ui fixed table'>
      <tbody>
      <tr>
        <td data-label='Id'>{item.id}</td>
        <td data-label='User_Id'>{item.user_id}</td>
        <td data-label='Title'>{item.title}</td>
        <td data-label='Body'>{item.body}</td>
        <td><button  className='ui button' type='button' onClick={() => removePost(item.id)}>Delete</button></td>
        <td><ButtonLink id={item.id} name={item.name} route='post' /></td>
      </tr>
      </tbody>
    </table>
    </div>
  ));

  const AddPost = () => (
    <Link className='ui button' to={{
      pathname: '/post/add',
    }}
    >
      Add New Post
    </Link>
  );

  return (

    <ul>
      <div>
        <div className='addButtonWrapper'>{AddPost()}</div>
      </div>
      <table className='ui fixed table'>
      <thead>
      <tr>
        <th>Id</th>
        <th>User Id</th>
        <th>Title</th>
        <th>Description</th>
        <th>{null}</th>
        <th>{null}</th>
      </tr>
      </thead>
      </table>
      {mapPostData()}
      <Loader active={loading} />
    </ul>
  );
};

export default ShowPosts;
