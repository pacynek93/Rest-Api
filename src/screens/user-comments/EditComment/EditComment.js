import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Header, Form, Button} from 'semantic-ui-react';
import { commentsUrl, config } from '../../../Token/Token';
import '../../user-posts/EditPost/EditPost.scss'


const EditComment = () => {

  const [commentData, setCommentData] = useState([]);

  const { id } = useParams();

  const getSingleComment = () => {
    axios.get(`${commentsUrl}/${id}`)
      .then(res =>
        setCommentData(res.data.data)
      );
  };

  console.log(commentData);

  useEffect( () => {
    getSingleComment();
  },[]);

  const onTodoChange = (e) => {
    /* eslint-disable */
    const name = e.target.name;
    const value = e.target.value;
    /* eslint-enable */
    setCommentData(prevState => ({
        ...prevState,
        [name]: value,
      }
    ));
  };

  const editSingleComment = (item) => {
    axios.put(`${commentsUrl}/${id}`, {...item}, config)
      .then(() => {
        console.log('saved');
      });
  }

  return (
  <div className='editPost'>
    <Form>
    <Header>Comment {id}</Header>
    <div>Name</div>
    <Form.Input name='name' defaultValue={commentData.name} onChange={onTodoChange}/>
    <div>Email</div>
    <Form.Input name='email' defaultValue={commentData.email} onChange={onTodoChange}/>
    <div>Comment</div>
    <Form.TextArea name='body' defaultValue={commentData.body} onChange={onTodoChange}/>
    </Form>
    <Button  onClick={() => editSingleComment(commentData)} type='button'>EDIT
    </Button>
  </div>
  )

};

export default EditComment;
