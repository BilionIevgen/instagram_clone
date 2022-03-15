import React, { useEffect, useRef } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { PostModal } from "./components/post/PostModal";
import {
  EditProfilePage,
  ExplorePage,
  FeedPage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  SignUpPage,
  PostPage,
} from "./pages";

function App() {
  const navigationType = useNavigationType();
  const location = useLocation();
  const modal = location.state?.modal;
  const prevLocation = useRef(location);
  useEffect(() => {
    if (navigationType !== "POP" && !modal) {
      prevLocation.current = location;
    }
  }, [location, modal, navigationType]);

  const isModalOpen = modal && prevLocation.current !== location;

  return (
    <>
      <Routes location={isModalOpen ? prevLocation.current : location}>
        <Route path="/" exect element={<FeedPage />} />
        <Route exect path="/:username" element={<ProfilePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route exect path="/p/:postId" element={<PostPage />} />
        <Route path="/accounts/login" element={<LoginPage />} />
        <Route path="/accounts/edit" element={<EditProfilePage />} />
        <Route path="/accounts/emailsignup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {isModalOpen && (
        <Routes>
          <Route exect path="/p/:postId" element={<PostModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
