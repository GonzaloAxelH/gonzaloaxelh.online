import React from "react";

const CommentsBlock = () => {
  return (
    <div className="comments-container">
      <div className="page-container">
        <div className="vc_row">
          <div className="vc_col-lg-12">
            <div
              id="comments"
              className="comments default-max-width show-avatars"
            >
              <div id="respond" className="comment-respond">
                <h4 id="reply-title" className="heading-md">
                  Leave a Reply
                  <small>
                    <a
                      rel="nofollow"
                      id="cancel-comment-reply-link"
                      href="https://ohio.clbthemes.com/standard/#respond"
                      style={{ display: "none" }}
                    >
                      Cancel reply
                    </a>
                  </small>
                </h4>
                <form
                  action="https://ohio.clbthemes.com/wp-comments-post.php"
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
                      Save my name, email, and website in this browser for the
                      next time I comment.
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
                  <input
                    name="wpml_language_code"
                    type="hidden"
                    defaultValue="en"
                  />
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
                      defaultValue={17953}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsBlock;
