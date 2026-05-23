import { LogIn, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <main className="screen home-screen">
    <section className="home-logo-hero" aria-label="잇장 홈">
      <img alt="잇장" className="home-logo" src="/assets/itjang-logo.png" />
    </section>

    <section className="login-panel panel" aria-label="로그인">
      <Link className="login-button login-button--musinsa" to="/profile">
        <ShoppingBag aria-hidden size={20} />
        <span>무신사 로그인</span>
      </Link>
      <Link className="login-button login-button--kakao" to="/profile">
        <LogIn aria-hidden size={20} />
        <span>카카오 로그인</span>
      </Link>
    </section>
  </main>
);

export default HomePage;
