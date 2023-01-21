import React, { useEffect, useState } from "react";
import { auth } from "@/settings/firebase";
import { provider } from "@/settings/firebase";

import { useSession, signIn, signOut } from "next-auth/react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  addComment,
  addSubComment,
  deleteSubComment,
  getComments,
} from "@/services/firebase";
//@ts-ignore
const CommentsBlock = ({ idArticle }: any) => {
  const { data: session } = useSession();
  const [change,setChange] = useState(false)
  const [newComment, setNewComment] = useState<any>({
    user: session?.user || {},
    comment: "",
    emailUser: session?.user?.email || "",
    idBlog: idArticle,
    alias: "",
    
    
  });
  const {
  comment : commentString
} = newComment
  const [allComments, setAllComments] = useState<any>(null);

  const GoogleSignIn = (e: any) => {
    e.preventDefault();
    if (!session) {
      signIn();
    } else {
      addComm();
      setChange(!change)
      
    }
  };

  useEffect(() => {
    loadCommentsByArticle();
    console.log(session)
  }, [change,setChange]);

  const loadCommentsByArticle = async () => {
    const comments = await getComments(idArticle);
    setAllComments(comments);
  };
  const addResponseComment = async (comment: any) => {
    await addSubComment(newComment, "333333333333333");
  };

  const deleteReplyComment = async (comment: any) => {
    let comm = {
      idUser: "89a3080c-d8bc-4010-8f61-ba33f21aefc8",
      emailUser: "test@gmail.com",
      comment: comment,
    };
    await deleteSubComment(comm, "qEDnTm9qk4uLi0vnGIQn");
  };

  const addComm = async () => {
    await addComment(newComment);
    alert("Comment success");
  };
  return (
    <div className="comments-container">
      <div className="page-container">
        <div className="vc_row">
          <div className="vc_col-lg-12">
            <div
              id="comments"
              className="comments default-max-width show-avatars"
            >
              <h4 className="heading-md">
                {allComments ? allComments.length || 0 : 0} comments
              </h4>
              <ul className="comments-list -unlist">
                {allComments &&
                  allComments.map((comment: any) => {
                    return (
                      <li
                        id="comment-3818"
                        className="comment even thread-even depth-1 parent"
                      >
                        <article id="div-comment-3818" className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <img
                                alt={comment?.user.name}
                                src={comment?.user?.image}

                                className="avatar avatar-60 photo"
                                height={60}
                                width={60}
                                loading="lazy"
                                decoding="async"
                              />{" "}
                              <b className="fn">
                                <a
                                  href="http://gonzaloaxel.com"
                                  rel="external nofollow ugc"
                                  className="url"
                                >
                                  {comment.user.name}{" "}
                                  <span
                                    style={{
                                      color: "gray",
                                      fontWeight: "lighter",
                                      fontSize: "13px",
                                    }}
                                  >
                                    <a href="#">@{comment.emailUser}</a>
                                  </span>
                                </a>
                              </b>{" "}
                              <span className="says">says:</span>
                            </div>
                            <div className="comment-metadata">
                              <a href="#">
                                <time dateTime="2023-01-21T00:49:36+00:00">
                                  January 21, 2023 at 12:49 am
                                </time>
                              </a>
                            </div>
                            <em className="comment-awaiting-moderation"></em>
                          </footer>
                          <div className="comment-content">
                            {comment.comment}
                          </div>
                          <div className="reply">
                            <a
                              rel="nofollow"
                              className="comment-reply-link"
                              href="#"
                              data-commentid={3818}
                              data-postid={17953}
                              data-belowelement="div-comment-3818"
                              data-respondelement="respond"
                              data-replyto="Reply to Gonzalo"
                              aria-label="Reply to Gonzalo"
                            >
                              responder
                            </a>
                          </div>
                        </article>
                        {comment.replies &&
                          comment.replies.map((reply: any) => {
                            return (
                              <ol className="children">
                                <li
                                  id="comment-3819"
                                  className="comment odd alt depth-2"
                                >
                                  <article
                                    id="div-comment-3819"
                                    className="comment-body"
                                  >
                                    <footer className="comment-meta">
                                      <div className="comment-author vcard">
                                        <img
                                          alt=""
                                          src="https://secure.gravatar.com/avatar/9db83a89310737a4ef2b2305228c69aa?s=60&d=mm&r=g"
                                          srcSet="https://secure.gravatar.com/avatar/9db83a89310737a4ef2b2305228c69aa?s=120&d=mm&r=g 2x"
                                          className="avatar avatar-60 photo"
                                          height={60}
                                          width={60}
                                          loading="lazy"
                                          decoding="async"
                                        />{" "}
                                        <b className="fn">
                                          <a
                                            href="http://gonzaloaxel.com"
                                            rel="external nofollow ugc"
                                            className="url"
                                          >
                                            Gonzalo
                                          </a>
                                        </b>{" "}
                                        <span className="says">says:</span>
                                      </div>
                                      <div className="comment-metadata">
                                        <a href="#">
                                          <time dateTime="2023-01-21T00:49:54+00:00">
                                            January 21, 2023 at 12:49 am
                                          </time>
                                        </a>
                                      </div>
                                      <em
                                        className="comment-awaiting-moderation"
                                        style={{ fontSize: "12px" }}
                                      ></em>
                                    </footer>
                                    <div className="comment-content">
                                      {reply.comment}
                                    </div>
                                    <div className="reply">
                                      <a
                                        rel="nofollow"
                                        className="comment-reply-link"
                                        href="#"
                                        data-commentid={3819}
                                        data-postid={17953}
                                        data-belowelement="div-comment-3819"
                                        data-respondelement="respond"
                                        data-replyto="Reply to Gonzalo"
                                        aria-label="Reply to Gonzalo"
                                      >
                                        Reply
                                      </a>
                                    </div>
                                  </article>
                                </li>
                              </ol>
                            );
                          })}
                      </li>
                    );
                  })}
              </ul>
              <div id="respond" className="comment-respond">
                <h4 id="reply-title" className="heading-md">
                  Leave a Reply
                  <small>
                    <a
                      rel="nofollow"
                      id="cancel-comment-reply-link"
                      href="#"
                      style={{ display: "none" }}
                    >
                      Cancel reply
                    </a>
                  </small>
                </h4>
                <form
                  onSubmit={GoogleSignIn}
                  id="commentform"
                  className="comment-form"
                  noValidate
                >
                  <p className="comment-notes">
                    <span id="email-notes">Coloca tu alias</span>
                    <span className="required-field-message">
                      <span className="required"></span>
                    </span>
                  </p>
                  <p className="comment-form-author">
                    <label htmlFor="author">
                      Name Alias<span className="required"></span>
                    </label>
                    <input
                      id="author"
                      name="author"
                      type="text"
                      defaultValue=""
                      size={30}
                      maxLength={245}
                      autoComplete="name"
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
                      Commentar con mi nombre original de google
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
                      defaultValue={commentString}
                      onChange={(e: any) =>
                        setNewComment({
                          ...newComment,
                          comment: e.target.value,
                        })
                      }
                    />
                  </p>
                  <input
                    name="wpml_language_code"
                    type="hidden"
                    defaultValue="en"
                  />
                  <p className="form-submit">
                    <span>
                      <button
                        name="submit"
                        type="submit"
                        id="submit"
                        className="submit"
                      >
                        {session ? (
                          <>
                            <span>
                              Post with <i>{session.user?.name}</i>
                            </span>
                          </>
                        ) : (
                          <>
                            <span style={{ marginRight: "10px" }}>
                              Sign In and Post Comment{" "}
                            </span>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                              alt=""
                              width={30}
                              height={30}
                            />
                          </>
                        )}
                      </button>
                    </span>
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
                <button
                  onClick={() =>
                    deleteReplyComment(
                      "Mi coghjkhjkhmentario cualquiera 2 @zaidzaid5453  xd 🤑 🙃"
                    )
                  }
                >
                  DELETE COMMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsBlock;
