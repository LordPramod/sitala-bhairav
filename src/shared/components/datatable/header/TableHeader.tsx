import { Button, HStack, Text } from "@chakra-ui/react";

import { TableHeaderProps } from "@/shared/types";

import { SearchInput } from "../../form";

export const TableHeader = ({
  title,
  hasSearch = true,
  searchText,
  setSearchText,
  actionButtonLabel,
  onActionButtonClick,
}: TableHeaderProps) => {
  return (
    <HStack justifyContent="space-between">
      <HStack>
        <Text fontWeight="medium">{title}</Text>

        {hasSearch && (
          <SearchInput
            value={searchText ?? ""}
            onChange={(searchText) => setSearchText?.(searchText)}
          />
        )}
      </HStack>
      <HStack>
        {actionButtonLabel && (
          <Button onClick={onActionButtonClick}>{actionButtonLabel}</Button>
        )}
      </HStack>
    </HStack>
  );
};
