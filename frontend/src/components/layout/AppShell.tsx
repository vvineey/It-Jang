import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

type AppShellProps = {
  showNav?: boolean;
};

const AppShell = ({ showNav = true }: AppShellProps) => (
  <div className="app-shell">
    <div className="mobile-frame">
      <Outlet />
      {showNav ? <BottomNav /> : null}
    </div>
  </div>
);

export default AppShell;
