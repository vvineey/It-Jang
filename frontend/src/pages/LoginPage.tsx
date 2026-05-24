import { Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => (
  <main className="screen login-screen">
    <section className="login-brand" aria-label="잇장 로그인">
      <img alt="잇장" className="login-logo" src="/assets/itjang-logo.png" />
      <div>
        <h1>다시 입는 즐거움, 잇장</h1>
        <p>옷장 속 옷을 다시, 더 오래.</p>
      </div>
    </section>

    <section className="login-actions" aria-label="로그인 방법">
      <Link className="login-button login-button--sns" to="/profile">
        <MessageCircle aria-hidden size={20} />
        <span>SNS 계정으로 계속하기</span>
      </Link>
      <Link className="login-button login-button--email" to="/profile">
        <Mail aria-hidden size={20} />
        <span>이메일로 로그인</span>
      </Link>
      <p>로그인하면 내 옷장과 추천 기록을 안전하게 저장할 수 있어요.</p>
    </section>
  </main>
);

export default LoginPage;
