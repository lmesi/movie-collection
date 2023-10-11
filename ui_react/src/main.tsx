import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./Pages/Home.tsx";
import Media from "./Pages/Media.tsx";
import Collections from "./Pages/Collections.tsx";
import {
  homeLoader,
  movieLodaer,
  seriesLoader,
  collectionsLoader,
  collectionDetailsLoader,
  movieDetailsLoader,
} from "./loaders.ts";
import CollectionDetails from "./Pages/CollectionDetails.tsx";
import MovieDetails from "./Pages/MovieDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "movies",
        element: <Media />,
        loader: movieLodaer,
      },
      {
        path: "series",
        element: <Media />,
        loader: seriesLoader,
      },
      {
        path: "collections",
        element: <Collections />,
        loader: collectionsLoader,
      },
      {
        path: "movies/:id",
        element: <MovieDetails />,
        loader: async ({ params }) => {
          return movieDetailsLoader(params.id);
        },
      },
      {
        path: "collections/:id",
        element: <CollectionDetails />,
        loader: async ({ params }) => {
          return collectionDetailsLoader(params.id);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
