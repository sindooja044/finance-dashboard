import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getTotals } from "../utils/calculate";
import SummaryCard from "../components/dashboard/SummaryCard";

const Dashboard = () => {
  const { transactions } = useContext(AppContext);

  const { income, expense, balance } = getTotals(transactions);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Total Balance" amount={balance} />
        <SummaryCard title="Income" amount={income} />
        <SummaryCard title="Expenses" amount={expense} />
      </div>

      {/* Placeholder for charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Balance Trend</h2>
          <p className="text-gray-400 mt-2">Chart coming soon...</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Spending Breakdown</h2>
          <p className="text-gray-400 mt-2">Chart coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;