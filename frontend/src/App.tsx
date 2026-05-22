import { Navigate, Route, Routes } from "react-router-dom";

const PlaceholderPage = ({ title }: { title: string }) => (
  <main className="placeholder-page">
    <p className="eyebrow">itjang</p>
    <h1>{title}</h1>
  </main>
);

const App = () => (
  <Routes>
    <Route path="/" element={<PlaceholderPage title="홈 화면 준비 중" />} />
    <Route path="/profile" element={<PlaceholderPage title="사용자 정보 입력" />} />
    <Route path="/closet" element={<PlaceholderPage title="내 옷장 조회" />} />
    <Route path="/closet/register" element={<PlaceholderPage title="옷장 등록" />} />
    <Route path="/recommend" element={<PlaceholderPage title="옷 추천 선택" />} />
    <Route path="/recommend/result" element={<PlaceholderPage title="추천 결과" />} />
    <Route path="/community" element={<PlaceholderPage title="커뮤니티" />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
