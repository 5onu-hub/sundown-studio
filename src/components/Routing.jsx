import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Work from "./Work";
import Studio from "./Studio";
import Contact from "./Contact";
import Home from "./Home";

function Routing({ data, companies, studioData }) {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <Home data={data} companies={companies} studioData={studioData} />
          ),
        },
        { path: "work", element: <Work /> },
        { path: "studio", element: <Studio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}

export default Routing;
