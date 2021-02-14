import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { url, config } from '../Token/Token';

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
      <div className='/'>
        <div className='editUser'>
          <div>User {id} </div>
          <input name='name' defaultValue={userData.name}
                 onChange={onTodoChange}
                 className='name' />
          <div>Email</div>
          <input type='email' name='email' defaultValue={userData.email} onChange={onTodoChange}
                 className='email' />
          <div>Gender</div>
          <input name='gender' defaultValue={userData.gender} onChange={onTodoChange}
                 className='gender' />
          <div>Status</div>
          <input name='status' defaultValue={userData.status} onChange={onTodoChange}
                 className='status' />
          <button onClick={() => editSingleUser(userData)} type='button'>Edit</button>
        </div>
      </div>
    );
  }
;

export default EditUser;
