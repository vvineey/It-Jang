import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import TopBar from "./TopBar";

type AppShellProps = {
  showNav?: boolean;
};

const AppShell = ({ showNav = true }: AppShellProps) => (
  <div className="app-shell">
    <div className="mobile-frame">
      <TopBar />
      <Outlet />
      {showNav ? <BottomNav /> : null}
    </div>
  </div>
);

export default AppShell;
