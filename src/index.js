import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Main from './Main';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Signup from './Signup';
import Logout from './Logout';
import Result from './Result';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  [{
  path:"/",
  element:<><Main/><App  /></>
  },
  {
    path:"/login",
    element:<><Main/><Login  /></>
    },
    {
      path:"/signup",
      element:<><Main/><Signup/></>
      },
      {
        path:"/logout",
        element:<><Main/><Logout/></>
        },
        {
          path:"/result",
          element:<><Main/><Result/></>
          },
  ]


)
root.render(
  <>
  <RouterProvider router={router}/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
