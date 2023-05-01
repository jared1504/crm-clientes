import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import NewClient, { action as newClientAction } from "./pages/NewClient";
import EditClient, {
  action as editClientAction,
  loader as editClientLoader,
} from "./pages/EditClient";
import Index, { loader as clientsLoader } from "./pages/Index";
import { action as destroyClientAction } from "./components/Client";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/new",
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/:id/edit",
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/:id/destroy",
        action: destroyClientAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
