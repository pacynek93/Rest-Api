import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { postsUrl } from '../Token/Token';
import 'semantic-ui-css/semantic.min.css';

const ShowPosts = () => {

  const [postList, setPostList] = useState([]);

  console.log(postList);

  const getPostList = () => {
    axios.get(postsUrl)
      .then(response => {
        setPostList(response.data.data);
      });
  };

  useEffect(() => {
    getPostList();
  }, []);

  const mapPostData = () => postList.map(item => (
    <table className='ui fixed table' key={item.id}>
      <thead>
      <tr>
        <th>Id</th>
        <th>User Id</th>
        <th>Title</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>{item.id}</th>
        <th>{item.user_id}</th>
        <th>{item.title}</th>
        <th>{item.body}</th>
      </tr>
      </tbody>
    </table>
  ));

  return (
    <ul>
      {mapPostData()}
    </ul>
  );
};

export default ShowPosts;
