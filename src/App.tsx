import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LandmarkPoseAI from "./components/pages/LandmarkPoseAI";
import LayoutWithoutFooter from "./components/layouts/LayoutWithoutFooter";
import ImagesPage from "./components/pages/Projects";
import Layout from "./components/layouts/Layout";
import LayoutLandingPage from "./components/layouts/LayoutLandingPage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import LayoutEmpty from "./components/layouts/LayoutEmpty";
import ProductIntroPage from "./components/pages/ProductIntroPage";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, useGSAP);

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
        </Route>
        <Route element={<LayoutLandingPage />}>
          <Route path="/projects" element={<ImagesPage />} />
        </Route>
        <Route element={<LayoutEmpty />}>
          <Route path="/product-intro-page" element={<ProductIntroPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}