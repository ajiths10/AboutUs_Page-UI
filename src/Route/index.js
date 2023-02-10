import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../view/V1";

const RouteIndex = () => {
  return (
    <>
      <Routes>
        <Route path="/v1" element={<Home />} />
      </Routes>
    </>
  );
};

export default RouteIndex;
