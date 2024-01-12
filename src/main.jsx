import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const fonts = {
  brand: {
    body: "Tahoma",
    heading: "Courier New",
  },
};

const theme = extendTheme({ fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
