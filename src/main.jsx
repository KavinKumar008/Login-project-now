import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import HeaderBar from "./HeaderBar.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import ErrorPage from "./error/ErrorPage.jsx";
import HomePage from "./homepage/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/header",
    element: (
      <PrivateRoutes>
        <HeaderBar />
      </PrivateRoutes>
    ),
  },
  {
    path: "/homePage",
    element: <HomePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
