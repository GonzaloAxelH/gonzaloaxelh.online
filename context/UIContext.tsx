import { createContext, useEffect, useState } from "react";

export const UIContext = createContext<any>({});

export const UIProvider = ({ children }: any) => {
  const [themeGlobal, setThemeGlobalState] = useState(true)
  const [scrollTop, setScrollTop] = useState(0);
  const [showNotification, setShowNotification] = useState({
        show: false,
        message:""
  });
  
  useEffect(() => {
    let body = document.getElementById("body_next"); 
    if (localStorage.getItem("theme")) {  
      if (localStorage.getItem("theme") === "true" ? true : false) {
        body?.classList.remove("light-scheme")
        body?.classList.add("dark-scheme")
        
      } else {


        body?.classList.remove("dark-scheme");
        body?.classList.add("light-scheme");
      }
    } else {
        body?.classList.remove("light-scheme")
        body?.classList.add("dark-scheme")
    }
  })

  const setThemeGlobal = (theme: boolean) => {
    localStorage.setItem("theme", theme ? "true" : "false")
    setThemeGlobalState(theme)
  }

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
