import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { client } from "./lib/apollo";
import { Router } from "./router";

import { theme } from "./styles/theme";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <ChakraProvider resetCSS theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ChakraProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
