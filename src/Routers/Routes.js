import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default routes;
