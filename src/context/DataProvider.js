import React, { useContext, useState } from 'react';
import { getLoginFile } from '../utils/HelperFunctions';

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

function DataProvider({ children }) {
  const logState = getLoginFile();
  const [login, setLogin] = useState(logState);
  const [userDetails, setUserDetails] = useState({});
  const [email, setMail] = useState('');
  const [progressOpen, setProgressOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  const contextData = {
    login,
    setLogin,
    userDetails,
    setUserDetails,
    setMail,
    email,
    courses,
    setCourses,
    progressOpen,
    setProgressOpen,
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
}

export default DataProvider;
