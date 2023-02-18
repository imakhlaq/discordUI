import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage";
import Error from "./page/Error";

const App = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <HomePage />, errorElement: <Error /> },
  ]);
  return <RouterProvider router={routes} />;
};
export default App;
