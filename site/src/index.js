import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Cadastrar from './pages/cadastrar/';
import Consultar from './pages/consultar/';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = '/cadastrar' element={<Cadastrar/>} />
      <Route path = '/consultar' element={<Consultar/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


