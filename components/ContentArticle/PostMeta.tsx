import React from "react";

const PostMeta = () => {
  return (
    <div className="post-meta-holder">
      <ul className="meta-holder -unlist">
        <li className="meta-item">
          <div className="avatar -small">
            <img
              alt="Colabrio"
              src="https://lh3.googleusercontent.com/ogw/AAEL6sjZywJSQ0Me8PR1WWUqFVhrUdXQtT1jFD6GOB73=s32-c-mo"
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
          August 4, 2020
        </li>
        <li className="meta-item">
          <span className="prefix"> 2 comments </span>
          <a href="https://ohio.clbthemes.com/standard/#comments">
            <span className="date">Join the Conversation</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PostMeta;
