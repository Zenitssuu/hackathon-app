import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Contest,Form } from "./components/index.js";
import axios from "axios";

axios.defaults.baseURL = `${import.meta.env.VITE_AXIOS_BASE_URL}`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/contest/:id",
        element: <Contest />,
        children:[
          
        ]
      },
      {
        path: "/create-contest",
        element:< Form />
      },
     
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
