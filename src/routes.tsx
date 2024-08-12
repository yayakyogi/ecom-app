import ExamplePage from "@pages/example-page";
import { RouteObject } from "react-router-dom";

export default [
  {
    path: "/",
    element: <ExamplePage />,
  },
] as RouteObject[];
