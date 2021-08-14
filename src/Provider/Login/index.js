import { createContext, useState, useContext, useEffect } from "react";

const LoggedContext = createContext();

export const LoggedProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const access = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));

    if (access) {
      return setLogged(true);
    }
  }, [logged]);
  return (
    <LoggedContext.Provider value={{ logged, setLogged }}>
      {children}
    </LoggedContext.Provider>
  );
};

export const useLogged = () => useContext(LoggedContext);
