import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "../../pages/Dashboard";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-4 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Layout;