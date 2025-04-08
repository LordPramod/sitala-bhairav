import { VStack } from "@chakra-ui/react";

import { TableHeader } from "./header";
import { Pagination } from "./pagination";
import { DatatableProps } from "../../types";
import { Table } from "@/shared/ui/Table";

export const DatatableWithManualPagination = <T,>({
  data,
  columns,
  header,
  pagination,
}: DatatableProps<T>) => {
  return (
    <VStack alignItems="stretch" gap={5}>
      {header?.showHeader && <TableHeader {...header} />}

      <Table data={data} columns={columns} />

      {pagination && <Pagination {...pagination} />}
    </VStack>
  );
};
