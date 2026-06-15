import { Link } from "react-router-dom";

const TopBar = () => (
  <header className="top-bar">
    <Link aria-label="잇장 홈으로 이동" className="top-bar__brand" to="/">
      <img className="top-bar__logo" src="/assets/itjang-logo-transparent.png" alt="" />
    </Link>
  </header>
);

export default TopBar;
