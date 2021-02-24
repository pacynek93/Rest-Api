import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Input, Header, Form} from 'semantic-ui-react';
import { commentsUrl, config } from '../Token/Token';
import '../EditPost/EditPost.scss'


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
    <Header>Comment {id}</Header>
    <div>Name</div>
    <Input name='name' defaultValue={commentData.name} onChange={onTodoChange}/>
    <div>Email</div>
    <Input name='email' defaultValue={commentData.email} onChange={onTodoChange}/>
    <div>Comment</div>
    <Form.TextArea name='body' defaultValue={commentData.body} onChange={onTodoChange}/>
    <button className='inputButton' onClick={() => editSingleComment(commentData)} type='button'>EDIT
    </button>
  </div>
  )

};

export default EditComment;
