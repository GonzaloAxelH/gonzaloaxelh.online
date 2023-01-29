import "@/styles/sass/globals.scss";
import "@/styles/sass/woocommerce.scss";
import "@/styles/text-styles.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { UIProvider } from "@/context/UIContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

 
  return (
    <SessionProvider session={session}>
      <UIProvider>
        
        <Component {...pageProps} />
      </UIProvider>
    </SessionProvider>
  );
}
