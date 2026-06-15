import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import TopBar from "./TopBar";

type AppShellProps = {
  showNav?: boolean;
  showTopBar?: boolean;
};

const AppShell = ({ showNav = true, showTopBar = true }: AppShellProps) => (
  <div className="app-shell">
    <div className="mobile-frame">
      {showTopBar ? <TopBar /> : null}
      <Outlet />
      {showNav ? <BottomNav /> : null}
    </div>
  </div>
);

export default AppShell;
