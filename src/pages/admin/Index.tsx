import AdminNavBar from "./AdminNavBar";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <section>
      <AdminNavBar />
      <main className="pt-20">
        <Outlet />
      </main>
    </section>
  );
};

export default Index;
