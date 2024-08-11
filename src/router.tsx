import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./config";
import CommingSoon from "./pages/_comming_soon";

import Home from "./pages/index";
import Error from "./pages/_error";
import Ideas from "./pages/ideas";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: ROUTES.ABOUT,
    element: <CommingSoon />,
    errorElement: <Error />,
  },
  {
    path: ROUTES.CAREERS,
    element: <CommingSoon />,
    errorElement: <Error />,
  },
  {
    path: ROUTES.CONTACT,
    element: <CommingSoon />,
    errorElement: <Error />,
  },
  {
    path: ROUTES.SERVICES,
    element: <CommingSoon />,
    errorElement: <Error />,
  },
  {
    path: ROUTES.IDEAS,
    element: <Ideas />,
    errorElement: <Error />,
  },
]);

export { router };
