import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowData.scss';
import { Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { url, config } from '../Token/Token';
import Button from '../Button/Button';

const ShowData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios.get(url)
      .then(res => {
        setData(res.data.data);
        setLoading(false);
      });
  };

  const removeData = (id) => {
    axios.delete(`${url}/${id}`, config)
      .then(() => {
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const mapData = () => data.map(item => (
    <div className='tableContent' key={item.id}>
      <table className='ui fixed table'>
        <tbody>
        <tr>
          <td data-label='Id'>{item.id}</td>
          <td data-label='Name'>{item.name}</td>
          <td data-label='Email'>{item.email}</td>
          <td data-label='Gender'>{item.gender}</td>
          <td data-label='Status'>{item.status}</td>
          <td>
            <button className='ui button' type='button' onClick={() => removeData(item.id)}>Delete
            </button>
          </td>
          <td><Button id={item.id} name={item.name} route='user' /></td>
        </tr>
        </tbody>
      </table>
    </div>
  ));

  const AddButton = () => (
    <Link className='ui button' to={{
      pathname: '/user/add',
    }}
    >
      Add New User
    </Link>
  );

  return (
    <>
      <div>
        <div className='addButtonWrapper'>{AddButton()}</div>
        <ul>
          <table className='tableHead ui fixed table'>
            <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>{null}</th>
              <th>{null}</th>
            </tr>
            </thead>
          </table>
          {mapData()}
        </ul>
        <Loader active={loading} />
      </div>
    </>
  );
};

export default ShowData;
