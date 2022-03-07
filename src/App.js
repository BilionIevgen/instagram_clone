import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  return (
    <Router>
      <Routes>
        <Route path="/" exect element={<FeedPage />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/p/:postId" element={<PostPage />} />
        <Route path="/accounts/login" element={<LoginPage />} />
        <Route path="/accounts/edit" element={<EditProfilePage />} />
        <Route path="/accounts/emailsignup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
