import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {disableReactDevTools} from '@fvilers-/disable-react-devtools'
import {disableReactDevTools}from '@fvilers/disable-react-devtools'
import { AppProvider } from './context';
// import Layout from './layout/Layout';


if(process.env.NODE_ENV==='production')disableReactDevTools()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <AppProvider>
      
      <App />
      
    </AppProvider>
    
    
  </React.StrictMode>
 
);

