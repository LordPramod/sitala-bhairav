import { Box, Table as ChakraTable, Spinner } from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TableProps } from "../types";

export const Table = <T,>({ data, columns, isLoading }: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getRowId: (row) => (row as { id: string })?.id,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
  });

  return (
    <ChakraTable.Root>
      <ChakraTable.Header>
        {table.getHeaderGroups().map((headerGroup) => (
          <ChakraTable.Row bgColor={"gray.300"} key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <ChakraTable.ColumnHeader key={header.id}>
                  <Box>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Box>
                </ChakraTable.ColumnHeader>
              );
            })}
          </ChakraTable.Row>
        ))}
      </ChakraTable.Header>

      <ChakraTable.Body>
        {isLoading && (
          <ChakraTable.Row mt={4} width={"100%"}>
            <ChakraTable.Cell colSpan={100}>
              <Box width={"100%"} textAlign={"center"} borderBottom={"none"}>
                <Spinner />
              </Box>
            </ChakraTable.Cell>
          </ChakraTable.Row>
        )}

        {table.getRowModel().rows.map((row) => (
          <ChakraTable.Row key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <ChakraTable.Cell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </ChakraTable.Cell>
              );
            })}
          </ChakraTable.Row>
        ))}
      </ChakraTable.Body>
    </ChakraTable.Root>
  );
};
