import React from 'react';
import UpdateCheckComponent from './UpdateCheckComponent';
import { Outlet } from 'react-router-dom';

const UpdateCheckContainer = () => {
  return (
    <div>
      <UpdateCheckComponent />
      <Outlet />
    </div>
  );
};

export default UpdateCheckContainer;
