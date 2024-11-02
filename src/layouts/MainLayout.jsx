import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <NavBar />

      <div className="min-h-[calc(100vh-295px)] py-12 container mx-auto px-20">
      {/* Dynamic */}
      <Outlet />
      </div>

      {/* Footer */}
        <Footer />
    </div>
  );
};

export default MainLayout;