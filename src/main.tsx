import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./pages/App.tsx";
import { RoomsPage } from "./pages/RoomsPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Rooms", element: <RoomsPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
