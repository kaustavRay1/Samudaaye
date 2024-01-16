import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SamudaayeLogo1 from "./pages/SamudaayeLogo1";
import UserProfile from "./pages/UserProfile";
import SamudaayeLogo11 from "./pages/SamudaayeLogo11";
import Group from "./pages/Group";
import Community1 from "./pages/Community1";
import HomePage from "./pages/HomePage";
import Community from "./pages/Community";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/samudaayelogo-1-1":
        title = "";
        metaDescription = "";
        break;
      case "/userprofile":
        title = "";
        metaDescription = "";
        break;
      case "/samudaayelogo-1-11":
        title = "";
        metaDescription = "";
        break;
      case "/group-2":
        title = "";
        metaDescription = "";
        break;
      case "/community":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/community1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/samudaayelogo-1-1" element={<SamudaayeLogo1 />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/samudaayelogo-1-11" element={<SamudaayeLogo11 />} />
      <Route path="/group-2" element={<Group />} />
      <Route path="/community" element={<Community1 />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/community1" element={<Community />} />
    </Routes>
  );
}
export default App;
