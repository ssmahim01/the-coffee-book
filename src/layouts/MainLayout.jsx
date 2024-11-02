import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
     <div className="h-16">
     <NavBar />
     </div>

      <div className="min-h-[calc(100vh-295px)] py-12 container mx-auto md:px-20 px-10">
      {/* Dynamic */}
      <Outlet />
      </div>

      {/* Footer */}
        <Footer />
    </div>
  );
};

export default MainLayout;