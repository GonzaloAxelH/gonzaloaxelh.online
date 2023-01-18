import React from "react";

const TagsBlog = () => {
  return (
    <div className="entry-footer">
      <div className="entry-footer-tags">
        <div className="tagcloud">
          <span className="tags-caption">Tagged with: </span>
          <a href="https://ohio.clbthemes.com/tag/blog/" rel="tag">
            Blog
          </a>
          <a href="https://ohio.clbthemes.com/tag/creative/" rel="tag">
            Creative
          </a>
          <a href="https://ohio.clbthemes.com/tag/portfolio/" rel="tag">
            Portfolio
          </a>
          <a href="https://ohio.clbthemes.com/tag/theme/" rel="tag">
            Theme
          </a>
          <a href="https://ohio.clbthemes.com/tag/wordpress/" rel="tag">
            WordPress
          </a>
        </div>
      </div>
    </div>
  );
};

export default TagsBlog;
