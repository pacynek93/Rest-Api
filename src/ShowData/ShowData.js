import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowData.css';

const token = '768d6ecea52a20df98f01cdd53a38d393a2655c471f428f03edb8035c8dd2910';

const config = { headers: { Authorization: `Bearer ${token}` } };

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

    const removeData = (id) => {
      axios.delete(`${url}/${id}`, config)
        .then(() => {
          getData();
        });
    };

    const mapData = () => {
      console.log(data);
      return data?.map(item => (
        <div className='blocks' key={item.id}>
          <ol>{item.id}</ol>
          <ol>{item.name}</ol>
          <ol>{item.email}</ol>
          <ol>{item.gender}</ol>
          <ol>{item.status}</ol>
          <ol>
            <button type='button' onClick={() => removeData(item.id)}>Kill me</button>
          </ol>
        </div>
      ));
    };

    return (
      <div>
        <ul>
          {mapData()}
        </ul>
      </div>
    );
  }
;

export default ShowData;
