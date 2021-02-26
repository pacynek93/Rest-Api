import { Link } from 'react-router-dom';
import React from 'react';
import { number, string } from 'prop-types';
import './Button.scss';
import 'semantic-ui-css/semantic.min.css';


const Button = ({
  id,
  route,
}) => (

  <Link className='ui button' to={{
    pathname: `${route}/${id}`,
    state: []
  }}
>
    Edit
  </Link>
);

Button.propTypes = {
  id: number.isRequired,
  route: string.isRequired,
};

export default Button;
