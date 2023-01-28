import Container from "@/components/hocs/Container";
import { UIContext } from "@/context/UIContext";
import { useGetCurse, useGetCurses } from "@/hooks/useGetCurses";
import { useGetSectionCurse } from "@/hooks/useGetSectionCurse";
import { getChildrenDatabase } from "@/services/notion";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import slugify from "slugify";

const Tutorial = ({ curse,content }: any) => {
  
  useEffect(() => {
    const fetch = async () => {
      console.log(content[0].id)
      console.log(content)
   //await getChildrenDatabase(content[0].id)
  // await useGetSectionCurse("");
 }  
    fetch()
  },[])

  const { themeGlobal } = useContext(UIContext);
  return (
    <Container customAddClases="post-template-default single single-post postid-114 single-format-standard wp-embed-responsive ohio-theme-3-1-2 with-switcher with-header-1 with-fixed-search with-headline with-mobile-switcher links-underline icon-buttons-animation custom-cursor wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-6 page-is-loaded">
      <div
        id="content"
        className="site-content"
        data-mobile-menu-resolution={768}
      >
        <div className="-layout2">
          <div className="vc_row">
            <div className="post-meta  ">
              <div className="page-headline without-cap -left subheader_excluded">
                <a
                  href="#fullscreen-post/"
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
                <div className="bg-image" />
                <div className="holder">
                  <div className="page-container">
                    <div className="animated-holder">
                      <div className="headline-meta">
                        <div className="category-holder">
                          <a
                            className="category"
                            href="#demo31/category/case-study/"
                            rel="category tag"
                          >
                            Case Study
                          </a>
                          <a
                            className="category"
                            href="#demo31/category/perspectives/"
                            rel="category tag"
                          >
                            Perspectives
                          </a>
                        </div>
                        <span className="post-meta-estimate">4 hours read </span>
                      </div>
                      <h1 className="title">
                        {curse.properties.Name?.title[0]?.plain_text}
                      </h1>
                      <div className="post-meta-holder">
                        <ul className="meta-holder -unlist">
                          <li className="meta-item">
                            <div className="avatar -small">
                              <img
                                alt="Colabrio"
                                src="./Booktips_ eight tips for service design with expert users. – Ohio Demo 31_files/172720f4a3c2aa57d5f6c81c3eee2c0f.png"
                                className="avatar avatar-96 photo"
                                height={96}
                                width={96}
                                loading="lazy"
                              />
                            </div>
                          </li>
                          <li className="meta-item">
                            <span className="prefix">Author</span>
                            <span className="author">Colabrio</span>
                          </li>
                          <li className="meta-item">
                            <span className="prefix">Published</span>
                            May 4, 2021
                          </li>
                          <li className="meta-item">
                            <span className="prefix"> 2 comments </span>
                            <Link href="#demo31/booktips-eight-tips-for-service-design-with-expert-users/#comments">
                              <span className="date">
                                Join the Conversation
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-share">
                <div className="share-bar -vertical" data-blog-share="true">
                  <div className="social-networks -small">
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fohio.clbthemes.com%2Fdemo31%2Fbooktips-eight-tips-for-service-design-with-expert-users%2F"
                      target="_blank"
                      className="facebook network"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?text=Booktips%3A+eight+tips+for+service+design+with+expert+users.,+https%3A%2F%2Fohio.clbthemes.com%2Fdemo31%2Fbooktips-eight-tips-for-service-design-with-expert-users%2F"
                      target="_blank"
                      className="twitter network"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fohio.clbthemes.com%2Fdemo31%2Fbooktips-eight-tips-for-service-design-with-expert-users%2F&description=Booktips%3A+eight+tips+for+service+design+with+expert+users."
                      target="_blank"
                      className="pinterest network"
                    >
                      <i className="fab fa-pinterest" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-content">
              <div className="page-content">
                <div id="primary" className="content-area">
                  <main id="main" className="site-main page-offset-bottom">
                    <div className="vc_row">
                      <div className="vc_col-lg-12">
                        <article
                          id="post-114"
                          className="post-114 post type-post status-publish format-standard has-post-thumbnail hentry category-case-study category-perspectives tag-ohio tag-theme tag-wordpress"
                        >
                          <div className="entry-content">
                            <figure className="wp-block-image size-full">
                              <img
                                style={{ borderRadius: "12px" }}
                                decoding="async"
                                width={1800}
                                height={1286}
                                src="/test_bg_tutorial.png"
                                alt=""
                                className="wp-image-110"
                                sizes="(max-width: 1800px) 100vw, 1800px"
                              />
                            </figure>

                            <p>
                              Just like other pseudo-elements and pseudo-class
                              selectors, can be chained with other
                              pseudo-classes and pseudo-elements. For example.
                            </p>
                          </div>
                        </article>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-nav">
          <div
            className="sticky-nav-thumbnail -fade-up"
            style={{
              backgroundImage:
                'url("https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-demo-31/oh__demo6__3a-min-768x549.jpg")',
            }}
          />
          <div
            className="sticky-nav-holder"
            style={{
              border: `1px solid ${!themeGlobal ? "#DADADA" : "#6E6E6E"}`,
            }}
          >
            <div className="sticky-nav-headline">
              <h6 className="title">Next Post</h6>
              <div className="nav-group">
                <a
                  className="icon-button prev -unlink"
                  href="#demo31/exploring-our-new-series-on-overcoming-adversity/"
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
                  href="#demo31/creativo-para-jovenes-the-designers-ui-ux-checklist/"
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
              href="#demo31/creativo-para-jovenes-the-designers-ui-ux-checklist/"
            >
              Creativo Para Jóvenes: the designer’s UI/UX checklist.
            </a>
          </div>
        </div>
        <div className="related-posts">
          <div className="page-container">
            <h4 className="heading-md title">Recent Posts</h4>
            <div className="vc_row archive-holder">
              {content.map((section: any) => {

              })}
              <div className="vc_col-lg-4 vc_col-md-6 vc_col-xs-12 grid-item masonry-block">
                <div
                  className="blog-item card -layout1 -contained -metro"
                  data-tilt="true"
                  data-tilt-perspective={6000}
                >
                  <a
                    href="#demo31/exploring-our-new-series-on-overcoming-adversity/"
                    data-cursor-class="cursor-link"
                  >
                    <figure className="image-holder">
                      <img
                        src="./Booktips_ eight tips for service design with expert users. – Ohio Demo 31_files/oh__demo6__3a-min-1024x732.jpg"
                        srcSet="
                    https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-demo-31/oh__demo6__3a-min-300x214.jpg    300w,
                    https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-demo-31/oh__demo6__3a-min-1024x732.jpg  1024w,
                    https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-demo-31/oh__demo6__3a-min-768x549.jpg    768w,
                    https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-demo-31/oh__demo6__3a-min-1536x1097.jpg 1536w,
                    https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-demo-31/oh__demo6__3a-min.jpg           1800w
                  "
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt=""
                      />
                      <div className="overlay-details -fade-up">
                        <ul className="meta-holder -unlist">
                          <li className="meta-item">
                            <div className="avatar -small">
                              <img
                                alt="Colabrio"
                                src="./Booktips_ eight tips for service design with expert users. – Ohio Demo 31_files/172720f4a3c2aa57d5f6c81c3eee2c0f(2).png"
                                srcSet="
                            https://secure.gravatar.com/avatar/172720f4a3c2aa57d5f6c81c3eee2c0f?s=100&d=mm&r=g 2x
                          "
                                className="avatar avatar-50 photo author-avatar"
                                height={50}
                                width={50}
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </li>
                          <li className="meta-item">
                            <span className="prefix">Posted by</span>
                            <span className="author">Colabrio</span>
                          </li>
                        </ul>
                      </div>
                    </figure>
                  </a>
                  <div className="card-details -left">
                    <div className="headline-meta -small-t">
                      <div className="date">May 5, 2021</div>
                      <span className="post-meta-estimate">8 min read </span>
                    </div>
                    <div className="heading title">
                      <h4 className="title">
                        <a
                          className="-unlink"
                          href="#demo31/exploring-our-new-series-on-overcoming-adversity/"
                        >
                          Exploring our new series on overcoming adversity.
                        </a>
                      </h4>
                    </div>
                    <div className="category-holder -with-tag">
                      <a
                        className="tag -unlink"
                        href="#demo31/category/case-study/"
                      >
                        Case Study
                      </a>
                      <a
                        className="tag -unlink"
                        href="#demo31/category/perspectives/"
                      >
                        Perspectives
                      </a>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div className="comments-container">
          <div className="page-container">
            <div className="vc_row">
              <div className="vc_col-lg-12">
                <div
                  id="comments"
                  className="comments default-max-width show-avatars"
                >
                  <h4 className="heading-md">2 comments</h4>
                  <ul className="comments-list -unlist">
                    <li
                      id="comment-2"
                      className="comment byuser comment-author-admin bypostauthor even thread-even depth-1 parent"
                    >
                      <article id="div-comment-2" className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              alt=""
                              src="./Booktips_ eight tips for service design with expert users. – Ohio Demo 31_files/172720f4a3c2aa57d5f6c81c3eee2c0f(3).png"
                              srcSet="
                          https://secure.gravatar.com/avatar/172720f4a3c2aa57d5f6c81c3eee2c0f?s=120&d=mm&r=g 2x
                        "
                              className="avatar avatar-60 photo"
                              height={60}
                              width={60}
                              loading="lazy"
                              decoding="async"
                            />
                            <b className="fn">
                              <a
                                href="#demo31"
                                rel="external nofollow ugc"
                                className="url"
                              >
                                Colabrio
                              </a>
                            </b>
                            <span className="says">says:</span>
                          </div>
                          {/* .comment-author */}
                          <div className="comment-metadata">
                            <a href="#demo31/booktips-eight-tips-for-service-design-with-expert-users/#comment-2">
                              <time dateTime="2021-10-21T15:00:31+00:00">
                                October 21, 2021 at 3:00 pm
                              </time>
                            </a>
                          </div>
                          {/* .comment-metadata */}
                        </footer>
                        {/* .comment-meta */}
                        <div className="comment-content">
                          <p>
                            The only way to track your client’s feedback far and
                            himself to he conduct, see a spirit, of them they
                            set could project a for the sign his support space
                            soon was then to ☝️
                          </p>
                        </div>
                        {/* .comment-content */}
                        <div className="reply">
                          <a
                            rel="nofollow"
                            className="comment-reply-link"
                            href="#demo31/booktips-eight-tips-for-service-design-with-expert-users/?replytocom=2#respond"
                            data-commentid={2}
                            data-postid={114}
                            data-belowelement="div-comment-2"
                            data-respondelement="respond"
                            data-replyto="Reply to Colabrio"
                            aria-label="Reply to Colabrio"
                          >
                            Reply
                          </a>
                        </div>
                      </article>
                      {/* .comment-body */}
                      <ol className="children">
                        <li
                          id="comment-4"
                          className="comment byuser comment-author-admin bypostauthor odd alt depth-2"
                        >
                          <article id="div-comment-4" className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  alt=""
                                  src="./Booktips_ eight tips for service design with expert users. – Ohio Demo 31_files/172720f4a3c2aa57d5f6c81c3eee2c0f(3).png"
                                  srcSet="
                              https://secure.gravatar.com/avatar/172720f4a3c2aa57d5f6c81c3eee2c0f?s=120&d=mm&r=g 2x
                            "
                                  className="avatar avatar-60 photo"
                                  height={60}
                                  width={60}
                                  loading="lazy"
                                  decoding="async"
                                />
                                <b className="fn">
                                  <a
                                    href="#demo31"
                                    rel="external nofollow ugc"
                                    className="url"
                                  >
                                    Colabrio
                                  </a>
                                </b>
                                <span className="says">says:</span>
                              </div>
                              {/* .comment-author */}
                              <div className="comment-metadata">
                                <a href="#demo31/booktips-eight-tips-for-service-design-with-expert-users/#comment-4">
                                  <time dateTime="2021-10-21T15:00:46+00:00">
                                    October 21, 2021 at 3:00 pm
                                  </time>
                                </a>
                              </div>
                              {/* .comment-metadata */}
                            </footer>
                            {/* .comment-meta */}
                            <div className="comment-content">
                              <p>
                                Just wanna thank you guys for this fabulous
                                WordPress theme and your post. 🙂
                              </p>
                            </div>
                            {/* .comment-content */}
                            <div className="reply">
                              <a
                                rel="nofollow"
                                className="comment-reply-link"
                                href="#demo31/booktips-eight-tips-for-service-design-with-expert-users/?replytocom=4#respond"
                                data-commentid={4}
                                data-postid={114}
                                data-belowelement="div-comment-4"
                                data-respondelement="respond"
                                data-replyto="Reply to Colabrio"
                                aria-label="Reply to Colabrio"
                              >
                                Reply
                              </a>
                            </div>
                          </article>
                          {/* .comment-body */}
                        </li>
                        {/* #comment-## */}
                      </ol>
                      {/* .children */}
                    </li>
                    {/* #comment-## */}
                  </ul>
                  <div id="respond" className="comment-respond">
                    <h4 id="reply-title" className="heading-md">
                      Leave a Reply
                      <small>
                        <a
                          rel="nofollow"
                          id="cancel-comment-reply-link"
                          href="#demo31/booktips-eight-tips-for-service-design-with-expert-users/#respond"
                          style={{ display: "none" }}
                        >
                          Cancel reply
                        </a>
                      </small>
                    </h4>
                    <form
                      action="#demo31/wp-comments-post.php"
                      method="post"
                      id="commentform"
                      className="comment-form"
                      noValidate
                    >
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        <span className="required-field-message">
                          Required fields are marked
                          <span className="required">*</span>
                        </span>
                      </p>
                      <p className="comment-form-author">
                        <label htmlFor="author">
                          Name <span className="required">*</span>
                        </label>
                        <input
                          id="author"
                          name="author"
                          type="text"
                          defaultValue=""
                          size={30}
                          maxLength={245}
                          autoComplete="name"
                          required
                        />
                      </p>
                      <p className="comment-form-email">
                        <label htmlFor="email">
                          Email <span className="required">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          defaultValue=""
                          size={30}
                          maxLength={100}
                          aria-describedby="email-notes"
                          autoComplete="email"
                          required
                        />
                      </p>
                      <p className="comment-form-url">
                        <label htmlFor="url">Website</label>
                        <input
                          id="url"
                          name="url"
                          type="url"
                          defaultValue=""
                          size={30}
                          maxLength={200}
                          autoComplete="url"
                        />
                      </p>
                      <p className="comment-form-cookies-consent">
                        <input
                          id="wp-comment-cookies-consent"
                          name="wp-comment-cookies-consent"
                          type="checkbox"
                          defaultValue="yes"
                        />
                        <label htmlFor="wp-comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>
                      <p className="comment-form-comment">
                        <label htmlFor="comment">
                          Comment <span className="required">*</span>
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          cols={45}
                          rows={8}
                          maxLength={65525}
                          required
                          defaultValue={""}
                        />
                      </p>
                      <p className="form-submit">
                        <input
                          name="submit"
                          type="submit"
                          id="submit"
                          className="submit"
                          defaultValue="Post Comment"
                        />
                        <input
                          type="hidden"
                          name="comment_post_ID"
                          defaultValue={114}
                          id="comment_post_ID"
                        />
                        <input
                          type="hidden"
                          name="comment_parent"
                          id="comment_parent"
                          defaultValue={0}
                        />
                      </p>
                    </form>
                  </div>
                  {/* #respond */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};






export async function getStaticPaths(context:any) {
  let articles = await useGetCurses();
  let paths: any = [];
  articles.map((art: any) => {
    paths.push({
      params: {
        courseslug: slugify(art.properties.Name.title[0].plain_text).toLowerCase(),
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
