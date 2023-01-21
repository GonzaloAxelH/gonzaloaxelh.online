import React, { useState } from "react";
import ElementsbarLeft from "../ElementsbarLeft";
import ElementsbarRight from "../ElementsbarRight";

const Layout = ({ children }: any) => {
  const [theme, setTheme] = useState("");
  console.log(theme);
  return (
    <body
      
      id="body_next"
      className={` post-template-default single single-post postid-17953 single-format-standard wp-embed-responsive theme-ohio woocommerce-js ohio-theme-3-1-9 with-switcher with-header-3 with-fixed-search with-headline with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor with-ajax-button wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-216976 page-is-loaded`}
      cz-shortcut-listen="true"
    >
    
      <div id="page" className="site bg-blur-site">
        <React.Fragment>{children}</React.Fragment>
      </div>
    </body>
  );
};

export default Layout;
