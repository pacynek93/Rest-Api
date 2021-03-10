import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Header, Button } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { config, postsUrl } from '../../../Token/Token';
import './EditPost.scss';
import '../AddPost/AddPost.scss';

const EditPost = () => {

  const [postData, setPostData] = useState([]);
  const [singleComment, setSingleComment] = useState([]);

  const { id } = useParams();

  const getSinglePost = () => {
    axios.get(`${postsUrl}/${id}`)
      .then(res =>
        setPostData(res.data.data),
      );
  };

  const getSingleComment = () => {
    axios.get(`${postsUrl}/${id}/comments`)
      .then(res =>
        setSingleComment(res.data.data),
      );
  };

  useEffect(() => {
    getSinglePost();
    getSingleComment();
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


  const mapSingleComment = () => singleComment.map(item => (
    <table className='ui fixed table' key={item.id}>
      <tbody>
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.body}</td>
      </tr>
      </tbody>
    </table>
  ));

  const editSinglePost = (item) => {
    axios.put(`${postsUrl}/${id}`, { ...item }, config)
      .then(() => {
        console.log('saved');
      });
  };


  return (
    <>
      <div className='editPost'>
        <Form>
          <Header>User {id}</Header>
          <div>User Id</div>
          <Form.Input name='user_id' defaultValue={postData.user_id} onChange={onTodoChange} />
          <div>Title</div>
          <Form.TextArea className='textAreaStyles' name='title' defaultValue={postData.title}
                         onChange={onTodoChange} />
          <div>Description</div>
          <Form.TextArea name='body' defaultValue={postData.body} onChange={onTodoChange} />
        </Form>
        <Button onClick={() => editSinglePost(postData)} type='button'>EDIT
        </Button>
      </div>
      <div>
        <Header className='postHeader'> Comments </Header>
        <table className='ui fixed table'>
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
          </tr>
          </thead>
        </table>
        {mapSingleComment()}
      </div>
    </>
  );
};

export default EditPost;
