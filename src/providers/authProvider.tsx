import React, { useState, useEffect } from "react";
import { AuthContextState } from "@/context/authContext";

const ContextProvider: React.FC<{
  isAuth?: boolean;
  children: React.ReactNode;
}> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContextState.Provider value={[isAuth, setIsAuth]}>
      {children}
    </AuthContextState.Provider>
  );
};

export default ContextProvider;
