import "../styles/globals.css";
import { theme } from "../styles/theme";
import { ContextProvider } from "../contexts/Context";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
