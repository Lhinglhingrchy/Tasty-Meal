import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import SearchPage from "./pages/SearchPage/SearchPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import RandomMealPage from "./pages/RandomMealPage/RandomMeal";
import { searchLoader } from "./pages/SearchPage/searchLoader";
import { HomeLoader } from "./pages/HomePage/homeLoader";
import "./App.css";
import { DetailsLoader } from "./pages/DetailsPage/detailsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: HomeLoader },
      { path: "/search", element: <SearchPage />, loader: searchLoader },
      { path: "/meal/:name", element: <DetailsPage />, loader: DetailsLoader },
      { path: "/random-meal", element: <RandomMealPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
