import "@/styles/sass/globals.scss";
import "@/styles/sass/woocommerce.scss";
import "@/styles/text-styles.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { UIProvider } from "@/context/UIContext";
import { useEffect, useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 5000);
  }, []);

  return (
    <SessionProvider session={session}>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </SessionProvider>
  );
}
