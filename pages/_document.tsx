import InitialAnimation from "@/components/InitialAnimation";
import { UIContext } from "@/context/UIContext";
import { Html, Head, Main, NextScript } from "next/document";
import { useContext } from "react";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <script
          src="https://kit.fontawesome.com/625cb85847.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
      </body>

      <NextScript />
    </Html>
  );
}
