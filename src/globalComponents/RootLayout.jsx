import Nav from "./nav";

import Footer from "./footer"
import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer/>
    </>
  );
}

export default RootLayout;
