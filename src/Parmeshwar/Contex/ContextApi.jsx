import React, { useState } from "react";
import { createContext } from "react";
import { useToast } from "@chakra-ui/react";

export const AppContent = createContext();

export const ContextApi = ({ children }) => {
  const toast = useToast();

  const [theme, setTheme] = useState("lightTheme");
  const [isAuth, setIsAuth] = useState(false);

  const themeHandler = (e) => {
    const { value } = e.target;

    if (theme !== value) {
      setTheme(value);
    } else {
      setTheme("darkTheme");
    }

    let title = theme === "lightTheme" ? "Dark Mode" : "Light Mode";

    toast({
      title: `${title} Enabled`,
      position: "bottom",
      duration: 2000,
      isClosable: true,
    });
  };

  const loginHandler = () => {
    setIsAuth(true);
  };

  const logoutHandler = () => {
    setIsAuth(false);
    localStorage.removeItem("username");
  };

  return (
    <AppContent.Provider
      value={{ theme, themeHandler, isAuth, logoutHandler, loginHandler }}
    >
      {children}
    </AppContent.Provider>
  );
};
