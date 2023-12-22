import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Experience from './pages/experience';
import ContactForm from './pages/contactform';
import ProjectOne from './pages/projectone';
import ProjectTwo from './pages/projecttwo';
import ProjectThree from './pages/projectthree';
import ProjectFour from './pages/projectfour';
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
    path: 'experience',
    element: <Experience/>
  },
  {
    path: 'contact',
    element: <ContactForm/>
  },
  {
    path: 'project-one',
    element: <ProjectOne/>
  }, 
  {
    path: 'project-two',
    element: <ProjectTwo/>
  }, 
  {
    path: 'project-three',
    element: <ProjectThree/>
  },
  {
    path: 'project-four',
    element: <ProjectFour/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
