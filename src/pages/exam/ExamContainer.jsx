import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ExamTabMenu from './ExamTabMenu';

const ExamContainer = () => {

  return (
    <>
      <ExamTabMenu />
      <Outlet />
    </>
  );
};

export default ExamContainer;
