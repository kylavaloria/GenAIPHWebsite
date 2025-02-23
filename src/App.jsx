import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar"; // ✅ Import Navbar
import "./index.css";
import "@fontsource/montserrat";
import BlogPost from "./pages/BlogPost";

function Layout() {
  const location = useLocation(); // 🔍 Get current URL

  return (
    <>
      {/* ✅ Render Navbar only if NOT on /blogs */}
      {location.pathname !== "/blogs" && !location.pathname.startsWith("/blog-post") && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-post/:id" element={<BlogPost />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Montserrat, sans-serif" }}>
        <Layout />
      </div>
    </Router>
  );
}

export default App;
