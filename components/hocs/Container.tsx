import React, { useState } from "react";
import ElementsbarRight from "../ElementsbarRight";
import ElementsbarLeft from "../ElementsbarLeft";
import HamburgerNav from "../HamburgerNav";
import SearchPopup from "../SearchPopup";

import Header from "../Header";
import SearchBtn from "../FloatElements/SearchBtn";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Notification from "../Notification";

const Container = ({ children, customAddClases = ""}: any) => {
  const [sidebar, setSidebar] = useState(false);
  return (
   <>
      <div id="page" className="site">
        <ElementsbarLeft />
        <ElementsbarRight />
        <Header setIsOpenSidebar={(isOpen: boolean) => setSidebar(isOpen)} />
        <Sidebar
          setCloseSidebar={(isClose: boolean) => setSidebar(isClose)}
          visible={sidebar ? "visible" : ""}
        />
        <React.Fragment>{children}</React.Fragment>
        <HamburgerNav />
        <SearchPopup />
        <SearchBtn />
        <Notification />
        <Footer />
      </div>
   </>
   
  );
};

export default Container;
