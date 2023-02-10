import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-5 w-full">
      <div className="w-[1050px]">{children}</div>
    </div>
  );
};

export default Layout;
