import React from "react";

const PostMeta = ({ author, publishedDate, lastEditedAt }: any) => {
  const publishedOn = new Date(publishedDate).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  //
  const modifiedDate = new Date(lastEditedAt).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="post-meta-holder">
      <ul className="meta-holder -unlist">
        <li className="meta-item">
          <div className="avatar -small">
            <img
              alt="Gonzalo"
              src={author?.avatar_url}
              className="avatar avatar-96 photo"
              height={96}
              width={96}
              loading="lazy"
            />
          </div>
        </li>
        <li className="meta-item">
          <span className="prefix">Author</span>
          <span className="author">{author.name}</span>
        </li>
        <li className="meta-item">
          <span className="prefix">Published</span>
          {publishedOn}
        </li>
        <li className="meta-item">
          <span className="prefix"> 0 comments </span>
          <a href="#comments">
            <span className="date">Join the Conversation</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PostMeta;
