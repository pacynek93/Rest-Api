import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader, Pagination } from 'semantic-ui-react';
import { config, todoUrl } from '../../../Token/Token';
import 'semantic-ui-css/semantic.min.css';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';



const ShowTodos = () => {

  const [userTodos, setUserTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);

  const getTodoData = (item) => {
    axios.get(`${todoUrl}//?page=${item}`)
      .then(res => {
          setUserTodos(res.data.data);
            setLoading(false);
        }
      );
  };

  const getPages = () => {
    axios.get(todoUrl)
      .then(res => (
        setPageCount(res.data.meta.pagination.pages)
      ));
  };

  const removeTodo = (id) => {
    axios.delete(`${todoUrl}/${id}`, config)
      .then(() => {
        getTodoData();
      });
  };

  useEffect(() => {
    getTodoData();
    getPages();
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
      <Loader active={loading} size='massive' />
      <Pagination className='pagination' totalPages={pageCount} onPageChange={(event, pageData) =>getTodoData(pageData.activePage)} />
    </>
  );
};

export default ShowTodos;
