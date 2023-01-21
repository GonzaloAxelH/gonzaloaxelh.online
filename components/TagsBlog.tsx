import React from "react";

const TagsBlog = ({ tags }: any) => {
  return (
    <div className="entry-footer">
      <div className="entry-footer-tags">
        <div className="tagcloud">
          <span className="tags-caption">Tagged with: </span>
          {tags.map((tag: any, index: any) => {
            return (
              <a
                key={index}
                href="https://ohio.clbthemes.com/tag/blog/"
                rel="tag"
              >
                {tag?.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TagsBlog;
