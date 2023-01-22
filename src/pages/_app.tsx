import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

import "../theme/ag-grid/index.css";

import AppProvider from "../context";
import { theme } from "../theme";
import dynamic from "next/dynamic";

const newDesign = extendTheme(theme);
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={newDesign}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
