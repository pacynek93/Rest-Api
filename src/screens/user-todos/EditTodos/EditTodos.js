import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Header } from 'semantic-ui-react';
import { config, todoUrl } from '../../../Token/Token';



const EditTodos = () => {

  const [todoData, setTodoData] = useState([]);

  const { id } = useParams();

  const getSingleTodo = () => {
    axios.get(`${todoUrl}/${id}`)
      .then(res =>
      setTodoData(res.data.data)
      );
  };

  const onTodoChange = (e) => {
    /* eslint-disable */
    const name = e.target.name;
    const value = e.target.value;
    /* eslint-enable */
    setTodoData(prevState => ({
        ...prevState,
        [name]: value,
      }
    ));
  };

  const editSingleTodo = (item) => {
    axios.put(`${todoUrl}/${id}`, {...item},config)
      .then(() => {
        console.log('saved');
      })
  }


  console.log(todoData)

  useEffect(() => {
    getSingleTodo()
  }, [])

  return (
    <div className='editPost'>
      <Form>
        <Header>Comment {id}</Header>
        <div>User Todos</div>
        <Form.TextArea name='title' defaultValue={todoData.title} onChange={onTodoChange}/>
      </Form>
      <Button  onClick={() => editSingleTodo(todoData)} type='button'>EDIT
      </Button>
    </div>
  )
}

export default EditTodos
