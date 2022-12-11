import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import ProjectDetails from "../Components/Home/ProjectDetails/ProjectDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project-details/:id",
    element: <ProjectDetails />,
  },
]);

export default routes;
