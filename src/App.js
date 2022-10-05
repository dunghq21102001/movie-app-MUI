
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieDetail/:id" element={<MovieDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
