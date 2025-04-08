import { Grid, Input, InputGroup } from "@chakra-ui/react";

import { SearchIcon } from "@/shared/assets";
import { SearchInputProps } from "@/shared/types";

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
}: SearchInputProps) => {
  return (
    <InputGroup
      startElement={
        <Grid
          placeItems="center"
          boxSize="10"
          color="system.inputGroup.element"
          css={{
            "& > svg": {
              boxSize: "5",
            },
          }}
        >
          <SearchIcon />
        </Grid>
      }
    >
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        paddingLeft="10 !important"
        borderRadius={"lg"}
      />
    </InputGroup>
  );
};
