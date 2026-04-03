const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">Finance</h2>
      <ul className="space-y-4">
        <li>Dashboard</li>
        <li>Transactions</li>
        <li>Insights</li>
      </ul>
    </div>
  );
};

export default Sidebar;