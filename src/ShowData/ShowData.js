import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowData.css';

const token = '768d6ecea52a20df98f01cdd53a38d393a2655c471f428f03edb8035c8dd2910';

const config = { headers: { Authorization: `Bearer ${token}` } };

const removeId = document.getElementById('input');

const ShowData = () => {
  const [data, setData] = useState([]);

  const url = 'https://gorest.co.in/public-api/users';

  const mapData = data?.map(item => (
    <div className='blocks' key={item.id}>
      <ol>{item.id}</ol>
      <ol>{item.name}</ol>
      <ol>{item.email}</ol>
      <ol>{item.gender}</ol>
      <ol>{item.status}</ol>
    </div>
  ));

  const getData = () => {
    axios.get(url)
      .then(res => setData(res.data.data));

  };
  const removeData = () => {
    axios.delete(`${url}/${removeId.value}`, config)
      .then(res => {
        console.log(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ul>
        {mapData}
      </ul>
      <>
        <input id='input' placeholder='type what Id you want to remove' required/>
        <button type='button' onClick={removeData}>Kill me</button>
      </>
    </div>
  );
};

export default ShowData;
