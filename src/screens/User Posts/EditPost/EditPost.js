import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Form, Header } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { config, postsUrl } from '../../../Token/Token';
import './EditPost.scss';

const EditPost = () => {

  const [postData, setPostData] = useState([]);

  console.log(postData);

  const { id } = useParams();

  const getSinglePost = () => {
    axios.get(`${postsUrl}/${id}`)
      .then(res =>
        setPostData(res.data.data),
      );
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  const onTodoChange = (e) => {
    /* eslint-disable */
    const name = e.target.name;
    const value = e.target.value;
    /* eslint-enable */
    setPostData(prevState => ({
        ...prevState,
        [name]: value,
      }
    ));
  };

  const editSinglePost = (item) => {
    axios.put(`${postsUrl}/${id}`, { ...item }, config)
      .then(() => {
        console.log('saved');
      });
  };

  return (
    <div className='editPost'>
      <Form>
      <Header>User {id}</Header>
      <div>User Id</div>
      <Form.Input name='user_id' defaultValue={postData.user_id} onChange={onTodoChange} />
      <div>Title</div>
      <Form.TextArea className='textAreaStyles' name='title' defaultValue={postData.title} onChange={onTodoChange} />
      <div>Description</div>
      <Form.TextArea name='body' defaultValue={postData.body} onChange={onTodoChange} />
      </Form>
      <button className='inputButton' onClick={() => editSinglePost(postData)} type='button'>EDIT
      </button>
    </div>
  );
};

export default EditPost;
