import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg to-light-bg text-white font-mono">
      <div className="min-h-full flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}