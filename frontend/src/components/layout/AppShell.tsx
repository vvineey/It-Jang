import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

const AppShell = () => (
  <div className="app-shell">
    <div className="mobile-frame">
      <Outlet />
      <BottomNav />
    </div>
  </div>
);

export default AppShell;
