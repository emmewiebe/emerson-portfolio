import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

if (typeof global === 'undefined') {
  globalThis.global = globalThis;
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}