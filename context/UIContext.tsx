import { createContext, useState } from "react";

export const UIContext = createContext<any>({});

export const UIProvider = ({ children }: any) => {
    const [showNotification, setShowNotification] = useState({
        show: false,
        message:""
  });
  const state = {
    showNotification,
    setShowNotification,
  };
  return <UIContext.Provider value={state}>{children}</UIContext.Provider>;
};
