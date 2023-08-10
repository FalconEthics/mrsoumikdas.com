"use client";

import { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  
  const [clicked, setClicked] = useState(false);

  const value = {
    clicked,
    setClicked, 
  };

  return (
    // this is the provider that will be used to wrap the app
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
