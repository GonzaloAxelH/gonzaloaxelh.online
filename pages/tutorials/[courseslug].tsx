import Container from "@/components/hocs/Container";
import { UIContext } from "@/context/UIContext";
import { useGetCurse, useGetCurses } from "@/hooks/useGetCurses";
import { useGetSectionCurse } from "@/hooks/useGetSectionCurse";
import { getChildrenDatabase } from "@/services/notion";
import siteMetadata from "@/settings/sitemetdata";
import { PageType } from "@/settings/types";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import slugify from "slugify";

const Tutorial = ({ curse, content }: any) => {
   const { themeGlobal } = useContext(UIContext);
  return (
    <Container
      customAddClases="post-template-default single single-post postid-17953 single-format-standard wp-embed-responsive theme-ohio woocommerce-js ohio-theme-3-1-9 with-switcher with-header-3 with-fixed-search with-headline with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor with-ajax-button wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-216976 page-is-loaded"
      customMeta={{
        title: `${curse.properties.Name.title[0]?.plain_text} - Gonzalo Axel`,
        imageUrl: curse?.cover?.file?.url || curse.cover?.external?.url,
        description:"Tutorial aun no terminado.Intenta mas tarde.",
        type: PageType.TUTORIAL,
        date: curse.created_time,
      }}
    >
      <div
        id="content"
        className="site-content"
        data-mobile-menu-resolution={768}
      >
        <div className="-layout1">
          <div className="page-headline without-cap -left subheader_excluded headline-with-parallax">
            <a
              href="#blog/compact/"
              className="back-link -unlink vc_hidden-md vc_hidden-sm vc_hidden-xs"
            >
              <button
                className="icon-button"
                aria-controls="site-navigation"
                aria-expanded="false"
              >
                <i className="icon">
                  <svg
                    className="default"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                  </svg>
                  <svg
                    className="minimal"
                    width={18}
                    height={16}
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 8C0 7.58579 0.335786 7.25 0.75 7.25H17.25C17.6642 7.25 18 7.58579 18 8C18 8.41421 17.6642 8.75 17.25 8.75H0.75C0.335786 8.75 0 8.41421 0 8Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.96967 0.71967C10.2626 0.426777 10.7374 0.426777 11.0303 0.71967L17.7803 7.46967C18.0732 7.76256 18.0732 8.23744 17.7803 8.53033L11.0303 15.2803C10.7374 15.5732 10.2626 15.5732 9.96967 15.2803C9.67678 14.9874 9.67678 14.5126 9.96967 14.2197L16.1893 8L9.96967 1.78033C9.67678 1.48744 9.67678 1.01256 9.96967 0.71967Z"
                    />
                  </svg>
                </i>
              </button>
              <span className="caption"> Back </span>
            </a>
            <div
              className="parallax"
              data-parallax-bg="vertical"
              data-parallax-speed=".5"
            >
              <div
                className="parallax-bg bg-image"
                style={{
                  height: "548.344px",
                  transform: "translate3d(0px, -71.5769px, 0px)",
                  transition: "transform 0.1s linear 0s",
                }}
              />
              <div className="parallax-content" />
            </div>
            <div className="holder">
              <div className="page-container">
                <div className="animated-holder">
                  <div className="headline-meta">
                    <div className="category-holder">
                      <a
                        className="category"
                        href="#category/digital/"
                        rel="category tag"
                      >
                        Digital
                      </a>
                      
                    </div>
                    <span className="post-meta-estimate">9 min read </span>
                  </div>
                  <h1 className="title">
                    {curse.properties.Name.title[0]?.plain_text}
                  </h1>
                  <div className="post-meta-holder">
                    <ul className="meta-holder -unlist">
                      <li className="meta-item">
                        <div className="avatar -small">
                          <img
                            alt="Colabrio"
                            src={siteMetadata.avatarImage}
                            className="avatar avatar-96 photo"
                            height={96}
                            width={96}
                            loading="lazy"
                          />
                        </div>
                      </li>
                      <li className="meta-item">
                        <span className="prefix">Author</span>
                        <span className="author">{siteMetadata.author}</span>
                      </li>
                      <li className="meta-item">
                        <span className="prefix">Published</span>
                        August 4, 2020
                      </li>
                      <li className="meta-item">
                        <span className="prefix"> 2 comments </span>
                        <a href="#standard/#comments">
                          <span className="date">Join the Conversation</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="page-container post-page-container"
            id="scroll-content"
          >
            <div className="post-share -sticky-block">
              <div className="share-bar -vertical" data-blog-share="true">
                <div className="social-networks -small">
                  <a
                    href="#"
                    target="_blank"
                    className="facebook network"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="pinterest network"
                  >
                    <i className="fab fa-pinterest" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="twitter network"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
            <div className="page-container">
              <div className="breadcrumb-holder">
                <nav aria-label="breadcrumb">
                  <ol
                    className="breadcrumb -unlist"
                    itemScope
                    itemType="http://schema.org/BreadcrumbList"
                  >
                    <li
                      className="breadcrumb-item"
                      itemProp="itemListElement"
                      itemScope
                      itemType="http://schema.org/ListItem"
                    >
                      <a itemProp="item" href="#">
                        <span itemProp="name">Home</span>
                      </a>
                      <svg
                        className="default"
                        width={5}
                        height={9}
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 14.5697L1.36504 16L9 8L1.36504 0L0 1.4303L6.26992 8L0 14.5697V14.5697Z" />
                      </svg>
                      <meta itemProp="position" content="1" />
                    </li>
                    <li
                      className="breadcrumb-item"
                      itemProp="itemListElement"
                      itemScope
                      itemType="http://schema.org/ListItem"
                    >
                      <a itemProp="item" href="#category/digital/">
                        <span itemProp="name">Digital</span>
                      </a>
                      <svg
                        className="default"
                        width={5}
                        height={9}
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 14.5697L1.36504 16L9 8L1.36504 0L0 1.4303L6.26992 8L0 14.5697V14.5697Z" />
                      </svg>
                      <meta itemProp="position" content="2" />
                    </li>
                    <li
                      className="breadcrumb-item"
                      itemProp="itemListElement"
                      itemScope
                      itemType="http://schema.org/ListItem"
                    >
                      <span itemProp="name" className="active">
                        The Highly Contemporary UI/UX Design from a Silicon
                        Valley.
                      </span>
                      <meta itemProp="position" content="3" />
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="page-content">
              <div id="primary" className="content-area">
                <main id="main" className="site-main page-offset-bottom">
                  <div className="vc_row">
                    <div className="vc_col-lg-12">
                      <article
                        id="post-17953"
                        className="post-17953 post type-post status-publish format-standard has-post-thumbnail hentry category-digital category-marketing tag-blog tag-creative tag-portfolio tag-theme tag-wordpress"
                      >
                        <div className="entry-content">
                          <h3>Using a Query</h3>
                          <p>
                            A
                            <a
                              href="https://1.envato.market/5Q25j"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              CSS
                            </a>
                            <dfn>pseudo-class</dfn> is a keyword added to a
                            selector that specifies a special state of the
                            selected element(s). For example,
                            <a
                              href="https://1.envato.market/5Q25j"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <code>:hover</code>
                            </a>
                            can be used to change a button’s color when the
                            user’s pointer hovers over it.
                          </p>
                          <p>
                            From the business, until be once yet pouring got it
                            <a
                              href="https://1.envato.market/5Q25j"
                              data-type="URL"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              duckthemed phase
                            </a>
                            in the creative concepts must involved. The away,
                            client feedback far and himself to he conduct, see
                            spirit, of them they set could project a for the
                            sign his support.
                          </p>
                          <figure className="wp-block-image size-full">
                            <img
                              decoding="async"
                              src="./The Highly Contemporary UI_UX Design from a Silicon Valley. – Ohio Theme_files/oh__img5.jpg"
                              alt=""
                              className="wp-image-20557"
                            />
                          </figure>
                          <p>
                            Other pseudo-elements and pseudo-class selectors,
                            <code>:not()</code> can be chained with other
                            pseudo-classes and pseudo-elements. For example, the
                            following will add a “New!” word to list items that
                            do not have a <code>.old</code> class name, using
                            the
                            <a
                              href="https://1.envato.market/5Q25j"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <code>::after</code>
                            </a>
                          </p>
                          <h3>Trivia &amp; Notes</h3>
                          <p>
                            The <code>:not()</code> selector is chainable with
                            more <code>:not()</code> selectors. For example,
                            <a
                              href="https://1.envato.market/5Q25j"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              the following
                            </a>
                            will match all <code>article</code>s except the one
                            with an ID <code>#featured</code>, and then will
                            filter out the articles with a class name
                            <code>.tutorial</code>:
                          </p>
                          <pre className="wp-block-preformatted">
                            article:not(#featured):not(.tutorial) {"{"}
                            {"\n"}
                            {"    "}/* style the articles that match */{"\n"}
                            {"}"}
                          </pre>
                          <p>
                            Just like other pseudo-elements and pseudo-class
                            selectors, <code>:not()</code> can be chained with
                            other pseudo-classes and pseudo-elements. For
                            example, the following will add a “New!” word to
                            list items that do not have a<code>.old</code> class
                            name, using the
                            <a
                              href="https://1.envato.market/5Q25j"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <code>::after</code>
                            </a>
                            pseudo-element:
                          </p>
                          <pre className="wp-block-preformatted">
                            li:not(.old)::after {"{"}
                            {"\n"}
                            {"    "}content: "New!";{"\n"}
                            {"    "}color: deepPink;{"\n"}
                            {"}"}
                          </pre>
                          <p>
                            You can see a live demo in the Live Demo section
                            below.
                          </p>
                          <h3>On the Specificity of Selectors</h3>
                          <p>
                            The specificity of the
                            <code>:not()</code> pseudo-class is the specificity
                            of its argument. The
                            <code>:not()</code> pseudo-class does not add to the
                            selector specificity, unlike other pseudo-classes.
                          </p>
                          <p>
                            The
                            <a
                              href="https://1.envato.market/5Q25j"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              simple selector
                            </a>
                            that <code>:not()</code> takes as an argument can be
                            any of the following:
                          </p>
                          <ul>
                            <li>
                              Type selector (e.g <code>p</code>,
                              <code>span</code>, etc.)
                            </li>
                            <li>
                              Class selector (e.g <code>.element</code>,
                              <code>.sidebar</code>, etc.)
                            </li>
                            <li>
                              ID selector (e.g <code>#header</code>)
                            </li>
                            <li>
                              Pseudo-class selector (e.g
                              <code>
                                <a
                                  href="https://1.envato.market/5Q25j"
                                  target="_blank"
                                  rel="noreferrer noopener"
                                >
                                  :first-child
                                </a>
                              </code>
                              ,
                              <code>
                                <a
                                  href="https://1.envato.market/5Q25j"
                                  target="_blank"
                                  rel="noreferrer noopener"
                                >
                                  :last-of-type
                                </a>
                              </code>
                              )
                            </li>
                          </ul>
                          <h3>Reference</h3>
                          <p>
                            The argument passed to <code>:not()</code> can
                            <em>not</em>, however, be a pseudo-
                            <strong>element</strong>
                            selector (such as
                            <a
                              href="http://tympanus.net/codrops/css_reference/before"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <code>::before</code>
                            </a>
                            and
                            <a
                              href="https://1.envato.market/5Q25j"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <code>::after</code>
                            </a>
                            , among others) or another negation pseudo-class
                            selector.
                          </p>
                          <blockquote className="wp-block-quote">
                            <p>
                              Getting practice furnished the where pouring the
                              of emphasis as return encourage a then that times,
                              the doing would in object we young been in the in
                              the to their line helplessly or name to in of, and
                              all and to more my way and opinion.
                            </p>
                            <p />
                          </blockquote>
                          <figure className="wp-block-table">
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <strong>Employee</strong>
                                  </td>
                                  <td>
                                    <strong>Salary</strong>
                                  </td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="https://1.envato.market/5Q25j"
                                      target="_blank"
                                      rel="noreferrer noopener"
                                    >
                                      Martin
                                    </a>
                                  </td>
                                  <td>$1</td>
                                  <td>
                                    Because that’s all Steve Job’ needed for a
                                    salary.
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="https://1.envato.market/5Q25j"
                                      target="_blank"
                                      rel="noreferrer noopener"
                                    >
                                      John
                                    </a>
                                  </td>
                                  <td>$100K</td>
                                  <td>For all the blogging he does.</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="https://1.envato.market/5Q25j"
                                      data-type="URL"
                                      data-id="https://1.envato.market/5Q25j"
                                      target="_blank"
                                      rel="noreferrer noopener"
                                    >
                                      Robert
                                    </a>
                                  </td>
                                  <td>$100M</td>
                                  <td>
                                    Pictures are worth a thousand words, right?
                                    So Tom x 1,000.
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="https://1.envato.market/5Q25j"
                                      target="_blank"
                                      rel="noreferrer noopener"
                                    >
                                      Jane
                                    </a>
                                  </td>
                                  <td>$100B</td>
                                  <td>With hair like that?! Enough said…</td>
                                </tr>
                              </tbody>
                            </table>
                          </figure>
                          <h3>Useful Fallbacks</h3>
                          <p>
                            It’s extension live for much place. Road, are, the
                            which, and handout tones. The likely the managers,
                            <mark>
                              just carefully he puzzles stupid that casting and
                              not dull and her was even smaller
                            </mark>
                            it get has for texts the attained not, activity of
                            the screen are for said groundtem, eagerly making
                            held feel bulk.
                          </p>
                          <p>
                            Just like other pseudo-elements and pseudo-class
                            selectors, <code>:not()</code> can be chained with
                            other pseudo-classes and pseudo-elements. For
                            example, the following will add a “New!” word to
                            list items that do not have a<code>.old</code> class
                            name, using the
                            <a
                              href="https://1.envato.market/5Q25j"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <code>::after</code>
                            </a>
                            pseudo-element:
                          </p>
                          <pre className="wp-block-preformatted">
                            element:not(.old)::after {"{"}
                            {"\n"}
                            {"    "}content: "New!";{"\n"}
                            {"    "}color: deepPink;{"\n"}
                            {"}"}
                            {"   "}
                          </pre>
                          <p>
                            You can see a live demo in the
                            <a
                              href="https://1.envato.market/5Q25j"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              Live Demo
                            </a>
                            section below.
                          </p>
                        </div>
                        <div className="entry-footer">
                          <div className="entry-footer-tags">
                            <div className="tagcloud">
                              <span className="tags-caption">
                                Tagged with:{" "}
                              </span>
                              <a href="#tag/blog/" rel="tag">
                                Blog
                              </a>
                              <a href="#tag/creative/" rel="tag">
                                Creative
                              </a>
                              <a href="#tag/portfolio/" rel="tag">
                                Portfolio
                              </a>
                              <a href="#tag/theme/" rel="tag">
                                Theme
                              </a>
                              <a href="#tag/wordpress/" rel="tag">
                                WordPress
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-nav">
          <div
            className="sticky-nav-thumbnail -fade-up"
            style={{
              backgroundImage:
                'url("https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_20-min-768x892.jpeg")',
            }}
          />
          <div className="sticky-nav-holder">
            <div className="sticky-nav-headline">
              <h6 className="title">Next Post</h6>
              <div className="nav-group">
                <a
                  className="icon-button prev -unlink"
                  href="#creativo-para-jovenes-a-designers-ui-ux-complete-checklist/"
                >
                  <i className="icon">
                    <svg
                      className="default"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                    </svg>
                    <svg
                      className="minimal"
                      width={18}
                      height={16}
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 8C0 7.58579 0.335786 7.25 0.75 7.25H17.25C17.6642 7.25 18 7.58579 18 8C18 8.41421 17.6642 8.75 17.25 8.75H0.75C0.335786 8.75 0 8.41421 0 8Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.96967 0.71967C10.2626 0.426777 10.7374 0.426777 11.0303 0.71967L17.7803 7.46967C18.0732 7.76256 18.0732 8.23744 17.7803 8.53033L11.0303 15.2803C10.7374 15.5732 10.2626 15.5732 9.96967 15.2803C9.67678 14.9874 9.67678 14.5126 9.96967 14.2197L16.1893 8L9.96967 1.78033C9.67678 1.48744 9.67678 1.01256 9.96967 0.71967Z"
                      />
                    </svg>
                  </i>
                </a>
                <a
                  className="icon-button next -unlink"
                  href="#definitive-guide-to-make-a-daily-more-productive-working-flow/"
                >
                  <i className="icon">
                    <svg
                      className="default"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                    </svg>
                    <svg
                      className="minimal"
                      width={18}
                      height={16}
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 8C0 7.58579 0.335786 7.25 0.75 7.25H17.25C17.6642 7.25 18 7.58579 18 8C18 8.41421 17.6642 8.75 17.25 8.75H0.75C0.335786 8.75 0 8.41421 0 8Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.96967 0.71967C10.2626 0.426777 10.7374 0.426777 11.0303 0.71967L17.7803 7.46967C18.0732 7.76256 18.0732 8.23744 17.7803 8.53033L11.0303 15.2803C10.7374 15.5732 10.2626 15.5732 9.96967 15.2803C9.67678 14.9874 9.67678 14.5126 9.96967 14.2197L16.1893 8L9.96967 1.78033C9.67678 1.48744 9.67678 1.01256 9.96967 0.71967Z"
                      />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
            <a
              className="titles-typo -undash"
              href="#definitive-guide-to-make-a-daily-more-productive-working-flow/"
            >
              Definitive Guide to Make a Daily More Productive Working Flow.
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticPaths(context: any) {
  let articles = await useGetCurses();
  let paths: any = [];
  articles.map((art: any) => {
    paths.push({
      params: {
        courseslug: slugify(
          art.properties.Name?.title[0]?.plain_text
        ).toLowerCase(),
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
}
//X
export async function getStaticProps(context: any) {
  const { courseslug } = context.params;

  const { content, idPage, article } = await useGetCurse(courseslug);
  const allCourses = await useGetCurses();
  return {
    // Passed to the page component as props
    props: {
      content,
      curse: article,
      courseslug,
      curses: allCourses.slice(0, 3),
    },
    revalidate: 20,
  };
}

export default Tutorial;
