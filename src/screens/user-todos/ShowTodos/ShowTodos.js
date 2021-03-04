import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { config, todoUrl } from '../../../Token/Token';
import 'semantic-ui-css/semantic.min.css';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';


const ShowTodos = () => {

  const [userTodos, setUserTodos] = useState([]);

  const getTodoData = () => {
    axios.get(todoUrl)
      .then(res =>
        setUserTodos(res.data.data),
      );
  };

  const removeTodo = (id) => {
    axios.delete(`${todoUrl}/${id}`, config)
      .then(() => {
        getTodoData();
      });
  };

  useEffect(() => {
    getTodoData();
  }, []);

  const mapTodoData = () => userTodos.map(item => (
    <div key={item.id}>
      <table className='ui fixed table'>
        <tbody>
        <tr>
          <td>{item.id}</td>
          <td>{item.user_id}</td>
          <td>{item.title}</td>
          <td><button className='ui button' type='button'
                      onClick={() => removeTodo(item.id)}>Delete
          </button></td>
          <td><ButtonLink id={item.id} name={item.name} route='todos' /></td>
        </tr>
        </tbody>
      </table>
    </div>
  ));


  return (
    <>
      <ul>
        <table className='ui fixed table'>
          <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>User Todos</th>
            <th>{null}</th>
            <th>{null}</th>
          </tr>
          </thead>
        </table>
        {mapTodoData()}
      </ul>
    </>
  );
};

export default ShowTodos;
