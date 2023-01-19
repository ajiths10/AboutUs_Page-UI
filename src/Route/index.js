import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../view";

const RouteIndex = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default RouteIndex;
