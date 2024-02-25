import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import DashboardIndex from "./pages/dashboard";
import FileManager from "./pages/file-manager";
import DashboardLayout from "./layouts/dashboardLayout";

export const LOGIN: string = '/'
export const DASHBOARD: string = '/app/dashboard'
export const FILEMANAGER: string = '/app/file-manger'


export const router = createBrowserRouter([
  {
    path: LOGIN,
    element: <LoginPage />,
  },
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      {
        path: DASHBOARD,
        element: <DashboardIndex />,
      },

      {
        path: FILEMANAGER,
        element: <FileManager />,
      },
    ]
  },
]);