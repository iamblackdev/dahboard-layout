import { Outlet, redirect, useNavigate, } from "react-router-dom"
import './styles.scss'
import DashboardSidebar from "./sidebar";
import DashboardHeader from "./header";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";

const DashboardLayout = () => {
  const navigate = useNavigate()

  const { token } = useAppSelector(
    (state) => state.persistedAuthReducer
  );

  return (
    <div className="dashboard_layout">
      <DashboardHeader />
      <DashboardSidebar />
      <div className="dashboard_content">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;