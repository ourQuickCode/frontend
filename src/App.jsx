import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Post } from "./pages/Post";

function App() {
  //<Route path="*" element={<NotFounPage />} />
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
