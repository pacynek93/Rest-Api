import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import { url, config } from '../../../Token/Token';
import './AddUser.scss';

const AddUser = () => {

  const [userData, setUserData] = useState([]);

  const onTodoChange = (e) => {
    const name = e?.target?.name;
    const value = e?.target?.value;
    setUserData(prevState => ({
        ...prevState,
        [name]: value,
      }
    ));
  };

    const postSingleUser = (item) => {
    axios.post(`${url}`, { ...item }, config)
      .then(res => {
        console.log(res.data.data);
        console.log(userData);
      });
  };


  return (
    <div>
      <div className='addUser'>
        <Form>
          <div>Name</div>
          <Form.Input name='name' placeholder='Name' defaultValue={userData.name}
                      onChange={onTodoChange} />
          <div>Email</div>
          <Form.Input name='email' placeholder='Email' defaultValue={userData.email}
                      onChange={onTodoChange} />
            <div>Gender</div>
          <Form.Input name='gender' placeholder='Can be Male of Female' defaultValue={userData.gender}
                      onChange={onTodoChange} />
          <div>Status</div>
           <Form.Input name='status' placeholder='Can be Active or Inactive' defaultValue={userData.status}
                      onChange={onTodoChange} />
        </Form>
        <Button type='button' onClick={() => postSingleUser(userData)}>ADD</Button>
      </div>
    </div>
  );

};

export default AddUser;
