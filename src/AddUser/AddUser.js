import React, { useState } from 'react';
import axios from 'axios';
import {Input} from 'semantic-ui-react'
import { url, config } from '../Token/Token';
import './AddUser.scss'


const AddUser = () => {

  const [userData, setUserData] = useState([]);


  const onTodoChange = (e) => {
    /* eslint-disable */
    const name = e.target.name;
    const value = e.target.value;
    /* eslint-enable */
    setUserData(prevState => ({
        ...prevState,
        [name]: value,
      }
    ));
  };

  const postSingleUser = (item) => {
    axios.post(`${url}`, { ...item }, config)
      .then(res => {
        console.log(res.data.data)
      });
  };




  console.log(userData);

  return (
    <div>
      <div className='addUser'>
        <div>Name</div>
        <Input name='name' placeholder='Name'  defaultValue={userData.name}  onChange={onTodoChange}/>
        <div>Email</div>
        <Input name='email' placeholder='Email'  defaultValue={userData.email} onChange={onTodoChange}/>
        <div>Gender</div>
        <Input name='gender' placeholder='Gender'  defaultValue={userData.gender} onChange={onTodoChange}/>
        <div>Status</div>
        <Input name='status' placeholder='Status' defaultValue={userData.status} onChange={onTodoChange}/>
        <button type='button' className='inputButtonAdd' onClick={() => postSingleUser(userData)}>ADD</button>
      </div>
    </div>
  );

};

export default AddUser;
