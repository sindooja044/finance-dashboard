import { createContext, useState } from "react";
import transactionsData from "../data/transactions";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("all");

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;