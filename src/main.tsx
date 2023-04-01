import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import './styles/styles.scss';

import App from './App';

const startApp = () => {
  const domAppRoot = document.getElementById('root');

  if (!domAppRoot) {
    throw new Error('#root not found');
  }

  ReactDOM.createRoot(domAppRoot).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

startApp();
