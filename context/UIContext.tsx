import { createContext, useState } from "react";

export const UIContext = createContext<any>({});

export const UIProvider = ({ children }: any) => {

  const [scrollTop, setScrollTop] = useState(0);
  


    const [showNotification, setShowNotification] = useState({
        show: false,
        message:""
    });
  const [themeGlobal,setThemeGlobal] = useState(true)
  const state = {
    showNotification,
    setShowNotification,
    setThemeGlobal,
    themeGlobal,
    scrollTop,
    setScrollTop
  };
  return <UIContext.Provider value={state}>{children}</UIContext.Provider>;
};
