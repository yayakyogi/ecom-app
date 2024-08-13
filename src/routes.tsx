// import ExamplePage from "@pages/example-page";
import Home from "@pages/Home";
import { RouteObject } from "react-router-dom";

export default [
  {
    path: "/",
    // element: <ExamplePage />,
    element: <Home />
  },
] as RouteObject[];
