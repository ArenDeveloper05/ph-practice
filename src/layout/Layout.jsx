import React from "react";

// //////
import MainPageHeader from "../components/home/main_page_header/MainPageHeader";
import MainPageFooter from '../components/home/main_page_footer/MainPageFooter'

const Layout = ({ children }) => {
  return (
    <>
      <MainPageHeader/>
      <main>{children}</main>
      <MainPageFooter/>
    </>
  );
};

export default Layout;
