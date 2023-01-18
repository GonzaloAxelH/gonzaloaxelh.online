import React from "react";

const AuthorContainer = () => {
  return (
    <div className="author-container">
      <div className="page-container">
        <div className="vc_row">
          <div className="vc_col-md-12">
            <div className="widget widget_ohio_widget_about_author">
              <div className="avatar -large">
                <img
                  alt="Colabrio"
                  src="https://lh3.googleusercontent.com/ogw/AAEL6sjZywJSQ0Me8PR1WWUqFVhrUdXQtT1jFD6GOB73=s32-c-mo"
                  srcSet="
                        https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=144&d=mm&r=g 2x
                      "
                  className="avatar avatar-72 photo"
                  height={72}
                  width={72}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="content">
                <div className="details">
                  <h6>Colabrio</h6>
                  <span className="site" />
                </div>
                <div className="description">
                  Digital content wrangler | UX enthusiast | Recovering educator
                  | Shameless nerd &amp; GIF connoisseur | Hockey fan | Oxford
                  comma or death.
                </div>
              </div>
              <div className="social-networks -contained -small">
                <a href="https://www.facebook.com/" className="network -unlink">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.facebook.com/" className="network -unlink">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.facebook.com/" className="network -unlink">
                  <i className="fab fa-pinterest" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorContainer;
