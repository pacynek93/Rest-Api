import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowData.scss';
import { Loader, Pagination } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { url, config } from '../../../Token/Token';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';

const ShowData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);


  const getData = (item) => {
    axios.get(`${url}/?page=${item}`)
      .then(res => {
        setData(res.data.data);
        setLoading(false);
      });
  };

  const getPages = () => {
    axios.get(url)
      .then(res => (
        setPageCount(res.data.meta.pagination.pages)
      ));
  };

  const removeData = (id) => {
    axios.delete(`${url}/${id}`, config)
      .then(() => {
        getData();
      });
  };

  useEffect(() => {
    getData();
    getPages();
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
          <td><ButtonLink id={item.id} name={item.name} route='user' /></td>
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
      <Pagination className='pagination' totalPages={pageCount} onPageChange={(event, pageData) =>getData(pageData.activePage)} />
    </>
  );
};

export default ShowData;
