import React, {useState} from 'react';
import axios from 'axios';
import {Input, Form} from 'semantic-ui-react';
import {postsUrl, config} from '../Token/Token';

const AddPost = () => {

  const [postData, setPostData] = useState([]);

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

  const postSinglePost  = (item) => {
    axios.post(`${postsUrl}`, {...item}, config)
      .then(response => {
        console.log(response.data.data)
      })
  }


  return (
    <div>
      <div className='editPost'>
        <div>User Id</div>
        <Input name='user_id' placeholder='User Id'  defaultValue={postData.email} onChange={onTodoChange}/>
        <div>Title</div>
        <Form.TextArea name='title' placeholder='Title'  defaultValue={postData.gender} onChange={onTodoChange}/>
        <div>Description</div>
        <Form.TextArea name='body' placeholder='Description' defaultValue={postData.status} onChange={onTodoChange}/>
        <button type='button' className='inputButtonAdd' onClick={() => postSinglePost(postData)}>ADD</button>
      </div>
    </div>
  );

}

export default AddPost;
