import { useState } from "react";
import { VStack } from "@chakra-ui/react";

import { TableHeader } from "./header";
import { Pagination } from "./pagination";
import { DATA_PER_PAGE } from "../../constant";
import { DatatableProps } from "../../types";
import { Table } from "@/shared/ui/Table";

export const DatatableWithAutoPagination = <T,>({
  data,
  columns,
  header,
  isLoading,
}: DatatableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DATA_PER_PAGE);
  const [searchText, setSearchText] = useState("");

  const pageCount = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;

  const paginatedData = data.slice(startIndex, startIndex + pageSize);

  return (
    <VStack alignItems="stretch" gap={5}>
      {header?.showHeader && (
        <TableHeader
          {...header}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      )}

      <Table data={paginatedData} columns={columns} isLoading={isLoading} />

      <Pagination
        currentPage={currentPage}
        onPaginationChange={(page) => setCurrentPage(page)}
        pageCount={pageCount}
        pageSize={pageSize}
        setPageSize={(pageSize) => {
          setPageSize(pageSize);
          setCurrentPage(1);
        }}
      />
    </VStack>
  );
};
