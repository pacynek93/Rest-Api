import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';
import { commentsUrl, config } from '../../../Token/Token';
import '../../User List/AddUser/AddUser.scss';

const AddComment = () => {

  const [commentData, setCommentData] = useState([]);

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

  const postSingleComment = (item) => {
    axios.post(`${commentsUrl}`, { ...item }, config)
      .then(response => {
        console.log(response.data.data);
      });
  };

  return (
    <div className='addUser'>
      <Form>
        <div>Post Id</div>
        <Form.Input name='post_id' placeholder='Post Id' defaultValue={commentData.post_id}
                    onChange={onTodoChange} />
        <div>Name</div>
        <Form.Input name='name' placeholder='Name' defaultValue={commentData.name}
                    onChange={onTodoChange} />
        <div>Email</div>
        <Form.Input name='email' placeholder='Email' defaultValue={commentData.email}
                    onChange={onTodoChange} />
        <div>Description</div>
        <Form.TextArea name='body' placeholder='Description' defaultValue={commentData.body}
                    onChange={onTodoChange} />
      </Form>
      <button type='button' className='inputButtonAdd'
              onClick={() => postSingleComment(commentData)}>ADD
      </button>
    </div>

  );
};

export default AddComment;
