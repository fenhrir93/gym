import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

export interface Navigation {
  path: string;
  title: string;
  element: JSX.Element;
}

export const NAVIGATION: Navigation[] = [
  {
    path: "/blog",
    title: "Blog",
    element: <AboutPage />,
  },
  {
    path: "/trainers",
    title: "Trainers",
    element: <AboutPage />,
  },
  {
    path: "/pricing",
    title: "Pricing",
    element: <AboutPage />,
  },
  {
    path: "/contacts",
    title: "Contacts",
    element: <AboutPage />,
  },
];

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      ...NAVIGATION,
      {
        path: "/",
        title: "Home",
        element: <HomePage />,
      },
    ],
  },
]);
