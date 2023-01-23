
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        id="body_next"
        className={`body post-template-default single single-post postid-17953 single-format-standard wp-embed-responsive theme-ohio woocommerce-js ohio-theme-3-1-9 with-switcher with-header-3 with-fixed-search with-headline with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor with-ajax-button wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-216976 page-is-loaded`}
        cz-shortcut-listen="true"
      >
        <div
          className="gradient"
          style={{ width: "300px", height: "300px" }}
        ></div>
        <div
          className="gradient2"
          style={{ width: "350px", height: "350px" }}
        ></div>
        <Main />
        <script
          src="https://kit.fontawesome.com/625cb85847.js"
          crossOrigin="anonymous"
        ></script>
        <NextScript />
      </body>
    </Html>
  );
}
