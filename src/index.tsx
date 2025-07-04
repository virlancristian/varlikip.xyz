import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toast';

import './css/index.css';
import "./css/gradients.css";
import "./css/fonts.css";
import "./css/animations.css";
import "./css/images.css";

import reportWebVitals from './reportWebVitals';
import { DesktopHeader } from './components/header/desktop.header';
import { MobileHeader } from './components/header/mobile.header';
import { RouterProvider } from 'react-router';
import { router } from './routers/router';
import { Footer } from './components/footer/footer';
import { MobileMenuContextProvider } from './hooks/mobile.menu.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <MobileMenuContextProvider>
      <DesktopHeader />
      <MobileHeader />
      <RouterProvider router={router} />
      <Footer />
      <ToastContainer />
    </MobileMenuContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
