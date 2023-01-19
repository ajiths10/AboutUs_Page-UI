import React from "react";
import { Route, Routes } from "react-router-dom";
import MarsDev from "../view";

const RouteIndex = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MarsDev />} />
      </Routes>
    </>
  );
};

export default RouteIndex;
