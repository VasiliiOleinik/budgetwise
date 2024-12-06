import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "@/pages/Dashboard";
import Error404 from "@/pages/Error404";
import GoalTracker from "@/pages/GoalTracker";
import Login from "@/pages/Login";
import Reports from "@/pages/Reports";
import Settings from "@/pages/Settings";
import React from "react";

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <ProtectedRoute element={<Dashboard />}/>,
  },
  {
    path: "/about",
    element: <ProtectedRoute element={<Settings />}/>,
  },
  {
    path: "/goal-tracker",
    element: <ProtectedRoute element={<GoalTracker />}/>, 
  },
  {
    path: "/reports",
    element: <ProtectedRoute element={<Reports />}/>,
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