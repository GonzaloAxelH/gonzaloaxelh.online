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
import Head from "next/head";
//@ts-ignore

const Container = ({
  children,
  customAddClases = "page-template-default page page-id-20830 wp-embed-responsive theme-ohio woocommerce-js ohio-theme-3-1-9 with-switcher with-header-2 with-fixed-search with-headline with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor with-ajax-button wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-216976 page-is-loaded",
  title = "Gonzalo Axel",
  circles=false
}: any) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div
      style={{ maxWidth: "100vw" }}
      id="body_next"
      className={`${customAddClases} dark-scheme custom-body`}
      cz-shortcut-listen="true"
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/small_logo.png" />
      </Head>
      <div id="page" className="site">
       
        {circles ? (
          <>
            <div className="gradient2"></div>
            <div className="gradient"></div>
          </>
        ) : null}
        <ElementsbarLeft />
        <ElementsbarRight />
        <Header setIsOpenSidebar={(isOpen: boolean) => setSidebar(isOpen)} />
        <Sidebar
          setCloseSidebar={(isClose: boolean) => setSidebar(isClose)}
          visible={sidebar ? "visible" : ""}
        />

        <SearchPopup />
        <React.Fragment>{children}</React.Fragment>

        <SearchBtn />
        <Notification />
        <Footer />
      </div>
    </div>
  );
};

export default Container;
