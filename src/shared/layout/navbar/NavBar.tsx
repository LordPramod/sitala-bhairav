import { Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { MenuSelect } from "../../components";
import { UserIcon } from "../../assets";

export const NavBar = () => {
  const menuItems = [
    {
      label: "View Profile",
      onSelect: () => console.log("View Profile Clicked"),
      value: "View Profile",
    },
    {
      label: "Log Out",
      value: "Log Out",
      onSelect: () => console.log("Log Out Clicked"),
    },
  ];
  return (
    <HStack justifyContent={"space-between"} py={4} px={8}>
      <Stack gap={1}>
        <Text fontWeight={500}>Welcome back </Text>
        <Flex gap={2} align={"center"}>
          <Text fontSize={"larger"} fontWeight={"medium"}>
            Pramod
          </Text>
          <Text fontSize={"sm"}> You're last login on Monday 01, 2023</Text>
        </Flex>
      </Stack>
      <HStack gap={4} align={"center"}>
        <Text fontWeight={500}>Pramod Thapa</Text>
        <MenuSelect menuItems={menuItems} menuTrigger={<UserIcon />} />
      </HStack>
    </HStack>
  );
};
