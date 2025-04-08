import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { LuLandmark, LuLayoutDashboard } from "react-icons/lu";
import { NavLink } from "react-router";

export const SideBarNav = () => {
  return (
    <Flex
      width={"260px"}
      direction={"column"}
      py={10}
      px={2}
      minH={"100vh"}
      borderRadius={"8px"}
      boxShadow={"lg"}
    >
      <Stack gap={5}>
        <Flex justifyContent={"center"}>
          <Text
            fontFamily={"sans-serif"}
            fontSize={"large"}
            fontWeight={"bold"}
          >
            Sitala Bhairav
          </Text>
        </Flex>
        <Stack p={2} gap={5} lineHeight={2}>
          <Flex align={"center"} gap={2} fontSize={"md"}>
            <Icon as={LuLayoutDashboard} />
            <NavLink to={"/"}>DashBoard</NavLink>
          </Flex>
          <Flex align={"center"} gap={2} fontSize={"md"}>
            <LuLandmark />
            <NavLink to={"/loans"}>Loans</NavLink>
          </Flex>
          <Flex align={"center"} gap={2} fontSize={"md"}>
            <LuLayoutDashboard />
            <Text>Credit score</Text>
          </Flex>
          <Flex align={"center"} gap={2} fontSize={"md"}>
            <LuLayoutDashboard />
            <Text>Reports</Text>
          </Flex>
          <Flex align={"center"} gap={2} fontSize={"md"}>
            <LuLayoutDashboard />
            <Text>Messages</Text>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
};
