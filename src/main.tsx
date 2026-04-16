import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { PrimeReactProvider } from "primereact/api";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./pages/App.tsx";
import { RoomsPage } from "./pages/RoomsPage.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";
import { RegisterPage } from "./pages/RegisterPage.tsx";
import { BookingPage } from "./pages/BookingPage.tsx";

import "primereact/resources/themes/viva-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Rooms", element: <RoomsPage /> },
  { path: "/Login", element: <LoginPage /> },
  { path: "/Register", element: <RegisterPage /> },
  { path: "/Booking", element: <BookingPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </PrimeReactProvider>
  </StrictMode>,
);
