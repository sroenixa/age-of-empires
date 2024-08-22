import './App.scss';
import React  from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Homepage from './views/Homepage/Homepage';
import ListPage from './views/ListPage/ListPage';
import DetailPage from './views/DetailPage/DetailPage';
import Layout from './layouts/Layout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/units" element={<ListPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
