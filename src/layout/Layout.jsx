import React from "react";

// //////
import MainPageHeader from "../components/home/main_page_header/MainPageHeader";

const Layout = ({ children }) => {
  return (
    <>
      <MainPageHeader/>
      <main>{children}</main>
      <footer>

      </footer>
    </>
  );
};

export default Layout;
