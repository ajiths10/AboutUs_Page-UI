import React from "react";

const FooterContentBody = ({ data }) => {
  return (
    <div className=" leading-7">
      {data?.map((item) => {
        return (
          <div className=" hover:text-white hover:cursor-pointer"> {item} </div>
        );
      })}
    </div>
  );
};

export default FooterContentBody;
