import { useRoutes } from "react-router";
import { AUTH_ROUTES, PAGE_ROUTES } from "./shared/constant/pageRoutes";
import { Layout } from "./shared";

const AppRoutes = () => {
  const isAuthenticated = true;
  const routes = useRoutes(isAuthenticated ? PAGE_ROUTES : AUTH_ROUTES);

  if (isAuthenticated) {
    return <Layout>{routes}</Layout>;
  }
  return routes;
};

export default AppRoutes;
