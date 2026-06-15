import { Link } from "react-router-dom";

const TopBar = () => (
  <header className="top-bar">
    <Link aria-label="잇장 홈으로 이동" className="top-bar__brand" to="/">
      <span className="top-bar__logo" aria-hidden>
        <img src="/assets/itjang-logo.png" alt="" />
      </span>
      <strong>잇장</strong>
    </Link>
  </header>
);

export default TopBar;
