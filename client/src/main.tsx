import * as React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Contact from '../components/Contact.tsx';
import HomePage from '../components/HomePage.tsx';
import Resume from '../components/Resume.tsx';
import Portfolio from '../components/Project.tsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
            path: "contact",
            element: <Contact />
        },
        {
            path: "resume",
            element: <Resume />
        }
      ],
    },
  ]);
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );