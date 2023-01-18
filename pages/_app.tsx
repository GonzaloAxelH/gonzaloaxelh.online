import "@/styles/globals.css";
import "@/styles/sidebar-content.css";
import "@/styles/content-sidebar.css";
import "@/styles/woocommerce.css";
//import "@/styles/rtl.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
