import { Menu, MenuItem, Portal } from "@chakra-ui/react";
import { ReactElement } from "react";

interface MenuItemType {
  value: string;
  onSelect?: () => void;
  label?: string;
}

interface MenuSelectProps {
  menuTrigger: ReactElement;
  menuItems: MenuItemType[];
}

export const MenuSelect = ({ menuTrigger, menuItems }: MenuSelectProps) => {
  return (
    <Menu.Root variant={"solid"}>
      <Menu.Trigger asChild>{menuTrigger}</Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {menuItems.map((item: MenuItemType, index: number) => (
              <MenuItem
                key={index}
                value={item.value}
                onSelect={item.onSelect}
                fontSize={"md"}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
