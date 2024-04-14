import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login'; // Assuming Login component is in a file named Login.js

// Render the Login component to the root element in the HTML file
ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);
