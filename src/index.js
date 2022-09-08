import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css'
import './style/style.scss';


import Home from './layout/home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Home />
    </div>
  </React.StrictMode>
);


