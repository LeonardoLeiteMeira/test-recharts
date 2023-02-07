import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
import GlobalContext from './state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <GlobalContext> 
      <ProSidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProSidebarProvider>
     </GlobalContext> 
  </React.StrictMode>
);
