/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const { employees, admin } = getLocalStorage();
  useEffect(() => {
    setUserData({ employees, admin });
  }, []);
  // console.log(userData);

  return (
    <div>
      <AuthContext.Provider value={"abuzar"}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
