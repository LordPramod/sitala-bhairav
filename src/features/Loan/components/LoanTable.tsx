import { Datatable } from "@/shared/components";

export const LoanTable = () => {
  const data = [
    {
      id: "1",
      date: "2025-04-08",
      customerName: "Pramod Thapa",
      customerId: "CUST001",
      applicationId: "APP123456",
      mobileNumber: "9800000000",
      loanAmount: 50000,
      interest: 12.5,
      loanStatus: "Approved",
    },
  ];

  const columns = [
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Customer name",
      accessorKey: "customerName",
    },
    {
      header: "Customer id",
      accessorKey: "customerId",
    },
    {
      header: "Application id",
      accessorKey: "applicationId",
    },
    {
      header: "Mobile number",
      accessorKey: "mobileNumber",
    },

    {
      header: "Loan amount",
      accessorKey: "loanAmount",
    },

    {
      header: "Interest",
      accessorKey: "interest",
    },

    {
      header: "Loan status",
      accessorKey: "loanStatus",
    },
  ];

  return (
    <Datatable
      data={data}
      columns={columns}
      autoPagination
      header={{ showHeader: true }}
    />
  );
};
