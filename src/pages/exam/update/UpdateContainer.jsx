import React from 'react';
import UpdateComponent from './UpdateComponent';
import { Outlet } from 'react-router-dom';

const UpdateContainer = () => {
  return (
    <div>
      <UpdateComponent />
      <Outlet />
    </div>
  );
};

export default UpdateContainer;
