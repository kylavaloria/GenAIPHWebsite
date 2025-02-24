import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";;
import "./index.css";
import "@fontsource/montserrat";

function AnimatedRoutes() {
  const location = useLocation(); // ✅ Now inside Router

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-post/:id" element={<BlogPost />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Montserrat, sans-serif" }}>
        {/* ✅ Show Navbar only if NOT on Blog pages */}
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
