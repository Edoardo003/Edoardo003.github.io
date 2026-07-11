import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { RedCodeCaseStudy } from "./pages/redcode";

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/redcode", Component: RedCodeCaseStudy },
  { path: "*", Component: Home },
]);
