import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Index;
