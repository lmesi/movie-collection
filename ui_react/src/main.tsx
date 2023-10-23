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
  seriesDetailsLoader,
} from "./loaders.ts";
import CollectionDetails from "./Pages/CollectionDetails.tsx";
import MovieDetails from "./Pages/MovieDetails.tsx";
import SeriesDetails from "./Pages/SeriesDetails.tsx";

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
        action: async ({ request }) => {
          const formData = await request.formData();
          const intent = formData.get("intent");

          if (intent === "add") {
            const collectionTitle = formData.get("collectionName");

            await fetch("/api/collections", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                title: collectionTitle,
              }),
            });

            return null;
          }

          if (intent === "delete") {
            const id = formData.get("id");

            await fetch(`/api/collections/${id}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            });

            return null;
          }
        },
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
        path: "series/:id",
        element: <SeriesDetails />,
        loader: async ({ params }) => {
          return seriesDetailsLoader(params.id);
        },
      },
      {
        path: "collections/:id",
        element: <CollectionDetails />,
        action: async ({ params, request }) => {
          const formData = await request.formData();
          const mediaId = formData.get("mediaId");
          const type = formData.get("type");

          await fetch(
            `/api/collections/${params.id}/remove?type=${type}&id=${mediaId}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
            }
          );

          return null;
        },
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
