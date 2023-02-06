import React, { useContext, useEffect, useState } from "react";
import ElementsbarRight from "../ElementsbarRight";
import ElementsbarLeft from "../ElementsbarLeft";
import HamburgerNav from "../HamburgerNav";
import SearchPopup from "../SearchPopup";
import { PageType } from "@/settings/types";
import Header from "../Header";
import SearchBtn from "../FloatElements/SearchBtn";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Notification from "../Notification";
import Head from "next/head";
//@ts-ignore
import siteMetadata from "@/settings/sitemetdata";

import { useRouter } from 'next/router';
import { UIContext } from "@/context/UIContext";

const Container = ({
  children,
  customAddClases = "page-template-default page page-id-20830 wp-embed-responsive theme-ohio woocommerce-js ohio-theme-3-1-9 with-switcher with-header-2 with-fixed-search with-headline with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor with-ajax-button wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-216976 page-is-loaded",
  blurredFixed=true,
  circles = false,
  customMeta = {},
}: any) => {
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter()
  const meta = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    imageUrl: siteMetadata.socialBanner,
    type: PageType.WEBSITE,
    twitterHandle: siteMetadata.twitterHandle,
    canonicalUrl: customMeta.sponsoredArticle
      ? customMeta.sponsoredUrl
      : `${siteMetadata.siteUrl}${router.asPath}`,
    date: null,
    ...customMeta,
  };
const {setScrollTop} = useContext(UIContext)
    
  useEffect(() => {
 const handleScroll = (event:any) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
  return (
    <div
    
      id="body_next"
      className={`${customAddClases} dark-scheme custom-body`}
      cz-shortcut-listen="true"
    >
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/small_logo.png" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${siteMetadata.siteUrl}${router.asPath}`}
        />

        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <link rel="canonical" href={meta.canonicalUrl} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Braydon Coyer" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.imageUrl} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div id="page" className="site">
       
       

        
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
