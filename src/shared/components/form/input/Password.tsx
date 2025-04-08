import { useController, useFormContext } from "react-hook-form";
import { Grid, useDisclosure } from "@chakra-ui/react";

import { TextFieldInput } from "./TextFieldInput";
import { EyeCloseIcon, EyeOpenIcon } from "../../../assets/svg";
import { PasswordInputProps } from "../../../types";

export const PasswordInput = ({ name, ...restProps }: PasswordInputProps) => {
  const { open, onToggle } = useDisclosure();

  const { control } = useFormContext();

  const { field } = useController({
    control,
    name: name,
  });

  const isIconVisible = field.value?.length > 0;

  return (
    <TextFieldInput
      {...restProps}
      name={name}
      type={open ? "text" : "password"}
      autoComplete="new-password"
      endElement={
        isIconVisible ? (
          <Grid
            placeItems="center"
            width="10"
            height="full"
            cursor="pointer"
            onClick={onToggle}
            color="system.inputGroup.element"
            css={{
              "& > svg": {
                boxSize: "5",
              },
            }}
          >
            {open ? <EyeOpenIcon /> : <EyeCloseIcon />}
          </Grid>
        ) : undefined
      }
    />
  );
};
