import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppShell from "./components/layout/AppShell";
import ClosetPage from "./pages/ClosetPage";
import ClosetPrivacyPage from "./pages/ClosetPrivacyPage";
import ClosetRegisterPage from "./pages/ClosetRegisterPage";
import CommunityPage from "./pages/CommunityPage";
import CirculationPage from "./pages/CirculationPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OutfitCopyPage from "./pages/OutfitCopyPage";
import RecommendationResultPage from "./pages/RecommendationResultPage";
import RecommendationSelectPage from "./pages/RecommendationSelectPage";
import PriceComparePage from "./pages/PriceComparePage";
import UserProfilePage from "./pages/UserProfilePage";

const VirtualTryOnPage = lazy(() => import("./pages/VirtualTryOnPage"));

const App = () => (
  <Routes>
    <Route element={<AppShell showNav={false} showTopBar={false} />}>
      <Route path="/login" element={<LoginPage />} />
    </Route>
    <Route element={<AppShell />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="/closet" element={<ClosetPage />} />
      <Route path="/closet/register" element={<ClosetRegisterPage />} />
      <Route path="/closet/privacy" element={<ClosetPrivacyPage />} />
      <Route path="/recommend" element={<RecommendationSelectPage />} />
      <Route path="/recommend/result" element={<RecommendationResultPage />} />
      <Route path="/price-compare" element={<PriceComparePage />} />
      <Route
        path="/try-on"
        element={
          <Suspense
            fallback={
              <main className="screen tryon-loading-screen">
                <span>3D 아바타를 준비하고 있어요</span>
              </main>
            }
          >
            <VirtualTryOnPage />
          </Suspense>
        }
      />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/outfits/:postId/copy" element={<OutfitCopyPage />} />
      <Route path="/circulation" element={<CirculationPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
