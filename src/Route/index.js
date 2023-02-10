import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../view/V1";
import HomeAdvance from "../view/V2";

const RouteIndex = () => {
  return (
    <>
      <Routes>
        <Route path="/v1" element={<Home />} />
        <Route path="/v2" element={<HomeAdvance />} />
      </Routes>
    </>
  );
};

export default RouteIndex;
