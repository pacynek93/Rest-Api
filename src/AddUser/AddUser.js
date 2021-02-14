import React, { useState } from 'react';
import axios from 'axios';
import { url, config } from '../Token/Token';

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
        <input name='name' placeholder='Name'  defaultValue={userData.name}  onChange={onTodoChange}/>
        <input name='email' placeholder='Email' defaultValue={userData.email} onChange={onTodoChange}/>
        <input name='gender' placeholder='Gender' defaultValue={userData.gender} onChange={onTodoChange}/>
        <input name='status' placeholder='Status' defaultValue={userData.status} onChange={onTodoChange}/>
        <button type='button' onClick={() => postSingleUser(userData)}>Add</button>
      </div>
    </div>
  );

};

export default AddUser;
