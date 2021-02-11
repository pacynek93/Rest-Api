import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { url, config } from '../Token/Token';

const AddUser = () => {

  const {
    id,
  } = useParams();

  const postSingleUser = (item) => {
    axios.post(`${url}/${id}`, { ...item }, config)
      .then(() => {
        console.log(item);
      });
  };

  return (
    <div>
      <div className='addUser'>
        <input placeholder='Id' />
        <input placeholder='Email' />
        <select placeholder='Gender'>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <select placeholder='Status'>
          <option value='active'>Active</option>
          <option value='inactive'>Inactive</option>
        </select>
        <button type='button' onClick={() => postSingleUser()}>Add</button>
      </div>
    </div>
  );

};

export default AddUser;
