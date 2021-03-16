import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader, Pagination } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { commentsUrl, config } from '../../../Token/Token';
import 'semantic-ui-css/semantic.min.css';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';

const ShowComments = () => {

  const [commentsList, setCommentsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);

  const getCommentsList = (item) => {
    axios.get(`${ commentsUrl }//?page=${item}`)
      .then(res => {
        setCommentsList(res.data.data);
        setLoading(false);
      });
  };

  const getPages = () => {
    axios.get(commentsUrl)
      .then(res => (
        setPageCount(res.data.meta.pagination.pages)
      ));
  };

  useEffect(() => {
    getCommentsList();
    getPages();
  }, []);

  const removeComment = (id) => {
    axios.delete(`${commentsUrl}/${id}`, config)
      .then(() => {
        getCommentsList();
      });
  };

  const mapCommentsData = () => commentsList.map(item => (
    <div key={item.id}>
      <table className='ui fixed table'>
        <tbody>
        <tr>
          <td>{item.id}</td>
          <td>{item.post_id}</td>
          <td>{item.name}</td>
          <td> {item.email}</td>
          <td>{item.body}</td>
          <td>
            <button className='ui button' type='button'
                    onClick={() => removeComment(item.id)}>Delete
            </button>
          </td>
          <td><ButtonLink id={item.id} name={item.name} route='comments' /></td>
        </tr>
        </tbody>
      </table>
    </div>
  ));

  const AddButton = () => (
    <Link className='ui button' to={{
      pathname: '/comments/add',
    }}
    >
      Add New Comment
    </Link>
  );

  return (
    <>
      <div className='addButtonWrapper'>{AddButton()}</div>
      <ul>
        <table className='ui fixed table'>
          <thead>
          <tr>
            <th>Id</th>
            <th>Post Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>{null}</th>
            <th>{null}</th>
          </tr>
          </thead>
        </table>
        {mapCommentsData()}
        <Loader active={loading} size='massive' />
      </ul>
      <Pagination className='pagination' totalPages={pageCount} onPageChange={(event, pageData) =>getCommentsList(pageData.activePage)} />
    </>

  );
};

export default ShowComments;
