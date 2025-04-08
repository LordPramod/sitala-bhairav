import { Box, HStack, VStack } from "@chakra-ui/react";
import { SideBarNav } from "./sidebar";
import { PropsWithChildren } from "react";
import { NavBar } from "./navbar";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <HStack alignItems="start" px={2} gap={2}>
      <SideBarNav />
      <VStack alignItems="stretch" flex="1">
        <NavBar />
        <Box px="6" py="4">
          {children}
        </Box>
      </VStack>
    </HStack>
  );
};
