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

const Container = ({
  children,
  customAddClases = "page-template-default page page-id-20830 wp-embed-responsive theme-ohio woocommerce-js ohio-theme-3-1-9 with-switcher with-header-2 with-fixed-search with-headline with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor with-ajax-button wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-216976 page-is-loaded",
}: any) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div
      id="body_next"
      className={`${customAddClases} custom-body`}
      cz-shortcut-listen="true"
      
    >
      <div id="page" className="site" >
        <div className="gradient"></div>
        <div className="gradient2"></div>
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
    </div>
  );
};

export default Container;
