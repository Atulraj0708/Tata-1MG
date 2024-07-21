import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import SiteProvider from "./store/SiteProvider";
import reducer , {initialState} from "./store/siteReducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SiteProvider initialState = {initialState} reducer = {reducer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SiteProvider>
);