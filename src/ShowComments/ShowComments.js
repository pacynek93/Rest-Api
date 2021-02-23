import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';
import { commentsUrl } from '../Token/Token';
import 'semantic-ui-css/semantic.min.css';

const ShowComments = () => {

  const [commentsList, setCommentsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCommentsList = () => {
    axios.get(commentsUrl)
      .then(res => {
        setCommentsList(res.data.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCommentsList();
  }, []);

  const mapCommentsData = () => commentsList.map(item => (
    <div>
      <table className='ui fixed table' key={item.id}>
        <tbody>
        <tr>
          <td>{item.id}</td>
          <td>{item.post_id}</td>
          <td>{item.email}</td>
          <td>{item.body}</td>
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
          <th>Post Id</th>
          <th>Email</th>
          <th>Description</th>
        </tr>
        </thead>
      </table>
      {mapCommentsData()}
      <Loader active={loading} />
    </ul>

  );
};

export default ShowComments;
