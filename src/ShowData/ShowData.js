import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowData.scss';
import { url, config } from '../Token/Token';
import Button from '../Button/Button';


const ShowData = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(url)
      .then(res => setData(res.data.data));
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


  const mapData = () => data?.map(item => (
    <div className='blocks' key={item.id}>
      <ol>{item.id}</ol>
      <ol>{item.name}</ol>
      <ol>{item.email}</ol>
      <ol>{item.gender}</ol>
      <ol>{item.status}</ol>
      <ol>
        <button type='button' onClick={() => removeData(item.id)}>Kill me</button>
        <Button id={item.id} name={item.name} route='user' />
      </ol>
    </div>
  ));

  return (
    <div>
      <ul>
        {mapData()}
      </ul>
    </div>
  );
};

export default ShowData;
