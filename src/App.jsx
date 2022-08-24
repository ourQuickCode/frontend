import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Profile } from "./pages/Profile";
import { Post } from "./pages/Post";
import { GlobalStyle } from "./../src/styles/GlobalStyles";
import Contact from "./pages/Contact";

function App() {
  //<Route path="*" element={<NotFounPage />} />
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
