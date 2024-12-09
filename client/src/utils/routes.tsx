import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "@/pages/Dashboard";
import Error404 from "@/pages/Error404";
import GoalTracker from "@/pages/GoalTracker";
import Login from "@/pages/Login";
import Reports from "@/pages/Reports";
import Settings from "@/pages/Settings";

export interface RouteConfig {
  path: string;
  element: JSX.Element
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
  },
  {
    path: "/settings",
    element: <ProtectedRoute><Settings /></ProtectedRoute>,
  },
  {
    path: "/goal-tracker",
    element:  <ProtectedRoute><GoalTracker /></ProtectedRoute>,
  },
  {
    path: "/reports",
    element: <ProtectedRoute><Reports /></ProtectedRoute>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
];


export default routes;