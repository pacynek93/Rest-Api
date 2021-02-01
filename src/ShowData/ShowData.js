import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowData.css'

const ShowData = () => {
  const [data, setData] = useState([]);

  const url = 'https://gorest.co.in/public-api/users';

  const getData = () => {
    axios.get(url)
      .then(res => setData(res.data.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ul>
        {data?.map(item => (
          <div className='blocks' key={item.id}>
            <ol>{item.id}</ol>
            <ol>{item.name}</ol>
            <ol>{item.email}</ol>
            <ol>{item.gender}</ol>
            <ol>{item.status}</ol>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShowData;
