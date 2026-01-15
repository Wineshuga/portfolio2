import AdminNavBar from "./AdminNavBar";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <section>
      <AdminNavBar />
      <main className="pt-24 md:pt-30">
        <Outlet />
      </main>
    </section>
  );
};

export default Index;
