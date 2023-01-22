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

const Container = ({ children }: any) => {
  const [sidebar,setSidebar] = useState(false)
  return (
    <div
      id="body_next"
      className={`body post-template-default single single-post postid-17953 single-format-standard wp-embed-responsive theme-ohio woocommerce-js ohio-theme-3-1-9 with-switcher with-header-3 with-fixed-search with-headline with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor with-ajax-button wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-216976 page-is-loaded`}
      cz-shortcut-listen="true"
    >
      <div id="page" className="site bg-blur-site">
        <ElementsbarLeft />
        <ElementsbarRight />
        <Header setIsOpenSidebar={(isOpen: boolean) => setSidebar(isOpen)} />
        <Sidebar setCloseSidebar={(isClose: boolean) => setSidebar(isClose)}  visible={sidebar ? "visible" : ""} />
        <React.Fragment>{children}</React.Fragment>
        <HamburgerNav />
        <SearchPopup />
        <SearchBtn />
        <Notification/>
        <Footer />
      </div>
    </div>
  );
};

export default Container;
