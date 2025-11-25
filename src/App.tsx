import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import SearchPage from "./pages/SearchPage/SearchPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import RandomMealPage from "./pages/RandomMealPage/RandomMeal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/meal/:name", element: <DetailsPage /> },
      { path: "/random-meal", element: <RandomMealPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
