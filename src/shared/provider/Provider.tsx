import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { Toaster } from "../ui/toaster";
import { ChakraProvider } from "@chakra-ui/react";
import { systemChakra } from "../theme";
import { PropsWithChildren } from "../types/provider.types";

export const Provider = ({ children }: PropsWithChildren) => {
  const QueryProvider = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 30 * 1000, // 30 seconds
      },
    },
  });
  return (
    <QueryClientProvider client={QueryProvider}>
      <ChakraProvider value={systemChakra}>
        <BrowserRouter>{children}</BrowserRouter>
        <Toaster />
      </ChakraProvider>
    </QueryClientProvider>
  );
};
