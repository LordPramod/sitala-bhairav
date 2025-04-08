import { useForm } from "react-hook-form";
import { Box, HStack, Text } from "@chakra-ui/react";

import { PageSizeSelectorProps } from "@/shared/types";

import { FormProvider } from "../../form";
import { ROWS_OPTIONS } from "@/shared/constant";
import { ReactSelect } from "../../select";

export const PageSizeSelector = ({
  pageSize,
  setPageSize,
}: PageSizeSelectorProps) => {
  const methods = useForm({
    defaultValues: {
      rows: pageSize.toString(),
    },
  });

  return (
    <FormProvider methods={methods} onSubmit={() => {}}>
      <HStack whiteSpace="nowrap" color="gray.700">
        <Text>Showing</Text>

        <Box width="20">
          <ReactSelect
            name="rows"
            options={ROWS_OPTIONS}
            extraOnChange={(value) => setPageSize(Number(value as string))}
            isSearchable={false}
          />
        </Box>

        <Text>per page</Text>
      </HStack>
    </FormProvider>
  );
};
