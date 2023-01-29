import Link from "next/link";
import React from "react";

const TagsBlog = ({ tags }: any) => {
  return (
    <div className="entry-footer">
      <div className="entry-footer-tags">
        <div className="tagcloud">
          <span className="tags-caption">Tagged with: </span>
          {tags.map((tag: any, index: any) => {
            return (
              <Link
                key={index}
                href="#tag"
                rel="tag"
              >
                {tag?.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TagsBlog;
