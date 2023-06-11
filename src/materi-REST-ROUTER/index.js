import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/layout";
import CheckoutPage from "./page/checkout";
import DetailPage from "./page/detail";
import ProductPage from "./page/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductPage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

const MateriRestRouter = () => {
  return <RouterProvider router={router} />;
};

export default MateriRestRouter;
