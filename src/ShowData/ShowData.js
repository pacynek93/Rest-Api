import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowData.scss';
import { Link } from 'react-router-dom';
import { url, config } from '../Token/Token';
import Button from '../Button/Button';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const ShowData = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

// Fix Loader !!! TODO

  const Loading = () => (
    data.length >= 20 ? setIsLoaded(false) : setIsLoaded(true)
  );

  const getData = () => {
    axios.get(url)
      .then(res => {
        setData(res.data.data);
        Loading();
        console.log(isLoaded);
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
    setIsLoaded();
  }, []);

  const mapData = () => data.map(item => (
    <div className='tableContent' key={item.id}>
      <table className='ui fixed table'>
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <td data-label='Id'>{item.id}</td>
        <td data-label='Name'>{item.name}</td>
        <td data-label='Email'>{item.email}</td>
        <td data-label='Gender'>{item.gender}</td>
        <td data-label='Status'>{item.status}</td>
        <td>
          <button  className='ui button' type='button' onClick={() => removeData(item.id)}>Kill me</button>
        </td>
        <td><Button id={item.id} name={item.name} route='user' /></td>
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

        {LoadingSpinner(isLoaded)}
        <ul>
          {mapData()}
        </ul>
        {AddButton()}
      </div>
    </>
  );
};

export default ShowData;
