import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'


import HeroesApp from './HeroesApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp/>
    </BrowserRouter>
  </React.StrictMode>,
);
