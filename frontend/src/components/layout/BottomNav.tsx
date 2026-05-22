import { Home, Shirt, Sparkles, UsersRound, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "홈", icon: Home },
  { to: "/profile", label: "정보", icon: UserRound },
  { to: "/closet", label: "옷장", icon: Shirt },
  { to: "/recommend", label: "추천", icon: Sparkles },
  { to: "/community", label: "커뮤니티", icon: UsersRound },
];

const BottomNav = () => (
  <nav className="bottom-nav" aria-label="주요 화면">
    {navItems.map(({ to, label, icon: Icon }) => (
      <NavLink
        className={({ isActive }) => `bottom-nav__item${isActive ? " is-active" : ""}`}
        end={to === "/"}
        key={to}
        to={to}
      >
        <Icon aria-hidden size={20} strokeWidth={2.2} />
        <span>{label}</span>
      </NavLink>
    ))}
  </nav>
);

export default BottomNav;
