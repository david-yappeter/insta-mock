import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div id="_inner-root">
    <Navbar />
    {children}
  </div>
);

export default Layout;
