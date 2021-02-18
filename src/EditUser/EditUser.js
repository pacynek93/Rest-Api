import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { url, config } from '../Token/Token';
import './EditUser.scss'

const EditUser = () => {

    const [userData, setUserData] = useState([]);

    const {
      id,
    } = useParams();

    const getSingleUser = () => {
      axios.get(`${url}/${id}`)
        .then(response => {
          setUserData(response.data.data);
        });
    };

    useEffect(() => {
      getSingleUser();
    }, []);

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

    const editSingleUser = (item) => {
      axios.put(`${url}/${id}`, { ...item }, config)
        .then(() => {
          console.log('saved');
        });
    };

    return (
        <div className='editUser'>
          <div>User {id} </div>
          <input name='name' defaultValue={userData.name}
                 onChange={onTodoChange}
                 className='editUserInput' />
          <div>Email</div>
          <input type='email' name='email' defaultValue={userData.email} onChange={onTodoChange}
                 className='editUserInput' />
          <div>Gender</div>
          <input name='gender' defaultValue={userData.gender} onChange={onTodoChange}
                 className='editUserInput' />
          <div>Status</div>
          <input name='status' defaultValue={userData.status} onChange={onTodoChange}
                 className='editUserInput' />
          <button className='inputButton' onClick={() => editSingleUser(userData)} type='button'>EDIT</button>
        </div>
    );
  }
;

export default EditUser;
