import { Link } from 'react-router-dom';
import React from 'react';
import { number, string } from 'prop-types';


const Button = ({
  id,
  route,
}) => (

  <Link  to={{
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
