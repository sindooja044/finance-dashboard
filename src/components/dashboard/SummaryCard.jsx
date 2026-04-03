import Card from "../ui/Card";

const SummaryCard = ({ title, amount }) => {
  return (
    <Card>
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-2xl font-bold mt-2">₹ {amount}</p>
    </Card>
  );
};

export default SummaryCard;