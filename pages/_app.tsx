import "@/styles/globals.css";
import "@/styles/sidebar-content.css";
import "@/styles/content-sidebar.css";
import "@/styles/woocommerce.css";
import "@/styles/text-styles.css";
//import "@/styles/rtl.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { UIProvider } from "@/context/UIContext";

export default function App({ Component, pageProps :{session,...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <UIProvider>
        
      <Component {...pageProps} />
      </UIProvider>
    </SessionProvider>
  );
}
