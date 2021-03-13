import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

/*Está pegando o arquivo App e colocando dentro dentro da div
root*/
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

