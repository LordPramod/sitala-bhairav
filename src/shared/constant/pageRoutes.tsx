import { Dashboard } from "@/features/Dashboard/components";
import { Login } from "../../features";
import { LoanTable } from "../../features/Loan";
import { ROUTE_CONFIG } from "../config";

export const PAGE_ROUTES = [
  {
    path: ROUTE_CONFIG.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: ROUTE_CONFIG.TEST,
    element: <>TEST</>,
  },
  {
    path: ROUTE_CONFIG.LOAN,
    element: <LoanTable />,
  },
  //   {
  //     path: ROUTE_CONFIG.DASHBOARD,
  //     element: <>DashBoard</>,
  //   },
  //   {
  //     path: ROUTE_CONFIG.DASHBOARD,
  //     element: <>DashBoard</>,
  //   },
];
export const AUTH_ROUTES = [
  {
    path: ROUTE_CONFIG.LOGIN,
    element: <Login />,
  },
];
