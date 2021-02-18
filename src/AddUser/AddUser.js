import React, { useState } from 'react';
import axios from 'axios';
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
        <input name='name' placeholder='Name' className='addUserInput' defaultValue={userData.name}  onChange={onTodoChange}/>
        <div>Email</div>
        <input name='email' placeholder='Email' className='addUserInput' defaultValue={userData.email} onChange={onTodoChange}/>
        <div>Gender</div>
        <input name='gender' placeholder='Gender' className='addUserInput' defaultValue={userData.gender} onChange={onTodoChange}/>
        <div>Status</div>
        <input name='status' placeholder='Status' className='addUserInput' defaultValue={userData.status} onChange={onTodoChange}/>
        <button type='button' className='inputButtonAdd' onClick={() => postSingleUser(userData)}>ADD</button>
      </div>
    </div>
  );

};

export default AddUser;
