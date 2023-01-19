import React from "react";
import RouteIndex from "./Route";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <RouteIndex />
      </SnackbarProvider>
    </div>
  );
};

export default App;
