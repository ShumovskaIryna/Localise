import React, { Suspense } from 'react';
import App from './App';
import './i18next';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Suspense fallback={(<div>Loading</div>)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);