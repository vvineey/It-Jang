import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import ClosetPage from "./pages/ClosetPage";
import HomePage from "./pages/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";
import UserProfilePage from "./pages/UserProfilePage";

const App = () => (
  <Routes>
    <Route element={<AppShell />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="/closet" element={<ClosetPage />} />
      <Route path="/closet/register" element={<PlaceholderPage title="옷장 등록" />} />
      <Route path="/recommend" element={<PlaceholderPage title="옷 추천 선택" />} />
      <Route path="/recommend/result" element={<PlaceholderPage title="추천 결과" />} />
      <Route path="/community" element={<PlaceholderPage title="커뮤니티" />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
