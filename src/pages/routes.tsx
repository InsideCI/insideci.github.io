import { Route, Routes } from 'react-router-dom';

import Dashboard from './Dashboard';
import React from 'react';
import Start from './Start';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={<Start />} />
      <Route path={'/dashboard'} element={<Dashboard />} />
    </Routes>
  );
}
