import { Link, NavLink } from "react-router-dom";
import { appLogo, customersIcon, dasboardIcon, fileIcon, productIcon, salesIcon, settingsIcon, shippingIcon, subscriptionIcon } from "../../assets/svg";
import './styles.scss'
import { DASHBOARD, FILEMANAGER } from "../../routes";
import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { SET_MOBILE_SIDE_BAR } from "../../store/rootReducer";


const DashboardSidebar = () => {
  const navLinks: { title: string, route: string, icon: ReactNode }[] = [
    { route: DASHBOARD, title: "Dashboard", icon: dasboardIcon },
    { route: FILEMANAGER, title: "File Manager", icon: fileIcon },

  ]

  const dispatch = useAppDispatch();
  const { appSideBarOpen } = useAppSelector(
    (state) => state.rootReducer
  );
  const toggleSideBar = (open: boolean): void => {
    dispatch(SET_MOBILE_SIDE_BAR(open))
  }

  return (
    <div className={`dashboard_sidebar ${appSideBarOpen ? "open" : ""}`}>
      <div className="logo_wrapper">
        {appLogo}
        <span className="display-m font-semibold">Carroza</span>
        <span className="max-[767px]:block hidden absolute right-[20px]" onClick={() => toggleSideBar(!appSideBarOpen)}>X</span>
      </div>
      <div className="nav_list">
        {navLinks.map(({ route, title, icon }) =>

          <NavLink to={route}
            key={route}
            className={({ isActive, }) => {
              return isActive ? "active" : "";
            }}
          >
            <div className="nav">
              <span>{icon}</span>
              <span className="text-m font-bold">{title}</span>
            </div>
          </NavLink>
        )
        }

      </div>
    </div>
  );
}

export default DashboardSidebar;