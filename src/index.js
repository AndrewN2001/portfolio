import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContactForm from './pages/contactform';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  }, 

  {
    path: 'contact',
    element: <ContactForm/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
