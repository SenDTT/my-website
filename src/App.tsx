import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import LandmarkPoseAI from "./components/pages/LandmarkPoseAI";
import LayoutWithoutFooter from "./components/LayoutWithoutFooter";
import ImagesPage from "./components/pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Route>
        <Route element={<LayoutWithoutFooter />}>
          <Route path="/projects/landmark-pose-ai" element={<LandmarkPoseAI />} />
          <Route path="/projects" element={<ImagesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}