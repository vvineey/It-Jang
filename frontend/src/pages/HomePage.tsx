import { LogIn, ShoppingBag, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <main className="screen home-screen">
    <section className="home-hero" aria-label="잇장 홈">
      <div className="wardrobe-visual" aria-hidden="true">
        <div className="wardrobe-glow" />
        <div className="wardrobe-left" />
        <div className="wardrobe-right" />
        <div className="wardrobe-rail" />
        <div className="hanging-cloth cloth-one" />
        <div className="hanging-cloth cloth-two" />
      </div>

      <div className="home-brand">
        <div className="brand-mark">
          <span>잇</span>
        </div>
        <p className="eyebrow">itda closet</p>
        <h1>잇장</h1>
        <p>내 옷장 속 옷을 다시 이어주는 지속가능 코디 추천 앱</p>
      </div>
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
      <div className="home-note">
        <Sparkles aria-hidden size={16} />
        <span>로그인 후 옷장 등록과 맞춤 추천을 시작해요.</span>
      </div>
    </section>
  </main>
);

export default HomePage;
