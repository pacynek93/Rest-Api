import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { url, config } from '../../../Token/Token';
import './EditUser.scss';

const EditUser = () => {

    const [userData, setUserData] = useState([]);
    const [postData, setPostData] = useState([]);

    const {
      id,
    } = useParams();

    const getSingleUser = () => {
      axios.get(`${url}/${id}`)
        .then(response => {
          setUserData(response.data.data);
        });
    };

    const getSinglePost = () => {
      axios.get(`${url}/${id}/posts`)
        .then(res =>
          setPostData(res.data.data));
    };


    useEffect(() => {
      getSingleUser();
      getSinglePost();
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

    const mapSingleUserPost = () => postData.map(item => (
        <table className='ui fixed table' key={item.id}>
          <tbody>
          <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
          </tbody>
        </table>
    ));

    return (
      <>
        <div className='editUser'>
          <Form>
          <Header>User {id} </Header>
          <div>Name</div>
          <Form.Input name='name' defaultValue={userData.name}
                 onChange={onTodoChange}
          />
          <div>Email</div>
          <Form.Input type='email' name='email' defaultValue={userData.email} onChange={onTodoChange}
          />
          <div>Gender</div>
          <Form.Input name='gender' defaultValue={userData.gender} onChange={onTodoChange}
          />
          <div>Status</div>
          <Form.Input name='status' defaultValue={userData.status} onChange={onTodoChange}
          />
          </Form>
          <Button onClick={() => editSingleUser(userData)} type='button'>EDIT
          </Button>
        </div>
        <div className='lowerContentWrapper'>
          <Header className='postHeader'>{userData.name} Posts</Header>
          <ul>
            <table className='ui fixed table'>
              <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
              </thead>
            </table>
            {mapSingleUserPost()}
          </ul>
        </div>
      </>
    );
  }
;

export default EditUser;
