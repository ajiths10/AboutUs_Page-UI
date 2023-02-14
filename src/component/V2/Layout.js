import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-5 w-full">
        <div className="w-[1050px]">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
