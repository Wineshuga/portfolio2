import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/admin/Login";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Editor from "./pages/admin/Editor";
import BlogList from "./pages/blog/BlogList";
import BlogPost from "./pages/blog/BlogPost";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Editor />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
