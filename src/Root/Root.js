import React from 'react';
import ShowData from '../ShowData/ShowData';
import DeleteUser from '../DeleteUser/DeleteUser';
import { Provider } from 'react-redux';

const Root = () => (
  <Provider store={store}>
    <>
      <ShowData />
      <DeleteUser />
    </>
  </Provider>
);

export default Root;
