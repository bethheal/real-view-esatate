import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./globalComponents/RootLayout";
import Home from "./pages/Home/Home";
import Contact from "./pages/Home/Contact";
import Services from "./pages/Home/Services";
import Properties from "./pages/Home/Properties";
import FAQ from "./pages/Home/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/properties",
        Component: Properties,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/help-center",
        Component: FAQ,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
