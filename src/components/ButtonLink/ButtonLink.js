import { Link } from 'react-router-dom';
import React from 'react';
import { number, string } from 'prop-types';
import './ButtonLink.scss';
import 'semantic-ui-css/semantic.min.css';


const ButtonLink = ({
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

ButtonLink.propTypes = {
  id: number.isRequired,
  route: string.isRequired,
};

export default ButtonLink;
