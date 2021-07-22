import React, { useContext, useState } from 'react';

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

function DataProvider({ children }) {
  const [login, setLogin] = useState(false);

  const contextData = {
    login,
    setLogin,
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
}

export default DataProvider;
