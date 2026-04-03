import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-semibold">Finance Dashboard</h1>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-1"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default Navbar;