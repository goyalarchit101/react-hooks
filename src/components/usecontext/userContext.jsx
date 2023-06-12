import { useState,createContext } from "react";


const UserContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState("Jesse Hall");
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export {UserContext, AppProvider}


// create context
// wrap top level with Provider
//use context

