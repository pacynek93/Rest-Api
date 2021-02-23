import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';
import { postsUrl, config } from '../Token/Token';
import 'semantic-ui-css/semantic.min.css';
import Button from '../Button/Button';
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
    <div>
    <table className='ui fixed table' key={item.id}>
      <tbody>
      <tr>
        <td>{item.id}</td>
        <td>{item.user_id}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
        <td><button  className='ui button' type='button' onClick={() => removePost(item.id)}>Delete</button></td>
        <td><Button id={item.id} name={item.name} route='post' /></td>
      </tr>
      </tbody>
    </table>
    </div>
  ));

  return (

    <ul>
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
