import Dashboard from "@/pages/Dashboard";
import Error404 from "@/pages/Error404";
import GoalTracker from "@/pages/GoalTracker";
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
    element: <Dashboard />,
  },
  {
    path: "/about",
    element: <Settings />,
  },
  {
    path: "/goal-tracker",
    element: <GoalTracker />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export default routes;