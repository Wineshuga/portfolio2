import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/public/home/Home";
import Layout from "./pages/public/Index";
import BlogList from "./pages/public/blog/BlogList";
import BlogPost from "./pages/public/blog/BlogPost";
import Login from "./pages/admin/Login";
import Editor from "./pages/admin/Editor";
import PostPage from "./pages/admin/PostPage";
import Trash from "./pages/admin/Trash";
import AdminLayout from "./pages/admin/Index";
import { ProtectedRoute } from "./hooks/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Route>
        <Route path="/admin/login" element={<Login />} />

        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Editor />} />
          <Route path="published-posts" element={<PostPage />} />
          <Route path="archived-posts" element={<PostPage />} />
          <Route path="trashed-posts" element={<Trash />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
