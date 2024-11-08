import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import ErrorPage from "./error/ErrorPage.jsx";
import HomePage from "./homepage/HomePage.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/homePage",
    element: (
      <PrivateRoutes>
        <HomePage />
      </PrivateRoutes>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
