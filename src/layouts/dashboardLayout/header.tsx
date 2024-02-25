import { hamburgerIcon, logoutIcon, searchIcon } from "../../assets/svg";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { SET_MOBILE_SIDE_BAR } from "../../store/rootReducer";

const DashboardHeader = () => {
  const dispatch = useAppDispatch();
  const { appSideBarOpen } = useAppSelector(
    (state) => state.rootReducer
  );
  const { userState, } = useAppSelector(
    (state) => state.persistedAuthReducer
  );

  const toggleSideBar = (open: boolean): void => {
    dispatch(SET_MOBILE_SIDE_BAR(open))
  }


  return (
    <div className="dashboard_header">
      <span className="hamburger_icon" onClick={() => toggleSideBar(!appSideBarOpen)}>{hamburgerIcon}</span>
      <div className="search">
        {searchIcon}
        <input name="search" type='search' placeholder="Search" />
      </div>
      <div className="user cursor-pointer">
        <div className="user_photo">
          <img src="/images/user_photo.png" alt="user" />
        </div>
        <div className="details">
          <span className="text-m font-medium">Miracle Gabriel</span>
          <span className="text-s font-medium">Super Admin</span>
        </div>
        <span>
          {logoutIcon}
        </span>
      </div>
    </div>
  );
}

export default DashboardHeader;