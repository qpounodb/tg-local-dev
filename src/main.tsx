import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import './styles/styles.scss';

import { initTelegramWebApp } from 'utils/initTelegramWebApp';

import App from './App';

const startApp = () => {
  const success = initTelegramWebApp();

  if (!success) {
    throw new Error('Failed init Telegram-Web-App SDK');
  }

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
