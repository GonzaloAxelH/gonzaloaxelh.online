import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";


import {
  addComment,
  addSubComment,
  deleteSubComment,
  getComments,
} from "@/services/firebase";

import moment from "moment";
moment.locale("es");
//@ts-ignore
const CommentsBlock = ({ idArticle }: any) => {
  const { data: session } = useSession();
  const [change, setChange] = useState(false);
  const [newComment, setNewComment] = useState<any>({
    user: session?.user || {},
    comment: "",
    emailUser: session?.user?.email || "",
    idBlog: idArticle,
    dateCreated: new Date,
    alias: "",
  });
  const { comment: commentString } = newComment;
  const [allComments, setAllComments] = useState<any>(null);
  const [openReply, setOpenReply] = useState({
    open: false,
    id: "",
  });
  let { open, id } = openReply;
  const GoogleSignIn = (e: any) => {
    e.preventDefault();
    if (!session) {
      signIn();
    } else {
      addComm();
      setChange(false);
    }
  };

  useEffect(() => {
    loadCommentsByArticle();
    console.log(session);
  }, [change, setChange, setOpenReply, openReply]);

  const loadCommentsByArticle = async () => {
    const comments = await getComments(idArticle);
    setAllComments(comments);
  };
  const handleReply = async (id: any) => {
    await addResponseComment(id);
    setOpenReply({
      ...openReply,
      id: "",
    });
    setNewComment({
      ...newComment,
      comment: "",
    });

    alert("SUB - Comment success");
  };
  const addResponseComment = async (id: any) => {
    if (commentString === "") {
      alert("coloca algo en los comentarios !!");
    } else {
      await addSubComment(
        {
          ...newComment,
          user: session?.user,
          dateCreated: new Date,
          emailUser: session?.user?.email,
        },
        id
      );
    }
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
    if (commentString === "") {
      alert("coloca algo en los comentarios !!");
    } else {
      setChange(false);

      await addComment({
        ...newComment,
        user: session?.user,

        dateCreated: new Date,
        emailUser: session?.user?.email,
      });

      setNewComment({ ...newComment, comment: "" });

      alert("Comment success");
    }
  };
  return (
    <>
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
                          <article
                            id="div-comment-3818"
                            className="comment-body"
                          >
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <Image
                                  alt={comment?.user.name}
                                  src={comment.user.image}
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
                                      <a href="#"></a>
                                    </span>
                                  </a>
                                </b>{" "}
                                <span className="says">says:</span>
                              </div>
                              <div className="comment-metadata">
                                <time>
                                
                                  {comment.dateCreated}
                                    
                                </time>
                              </div>
                              <em className="comment-awaiting-moderation"></em>
                            </footer>
                            <div className="comment-content">
                              {comment.comment}
                            </div>
                            <div className="reply">
                              <a
                                onClick={() =>
                                  setOpenReply({ ...openReply, id: comment.id })
                                }
                                rel="nofollow"
                                className="comment-reply-link"
                              >
                                Responder
                              </a>

                              {id === comment.id && (
                                <>
                                  <p className="comment-form-comment">
                                    <label htmlFor="comment">
                                      Comment{" "}
                                      <span className="required">*</span>
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
                                  <button
                                    onClick={() => handleReply(comment.id)}
                                    name="submit"
                                    type="submit"
                                    id="submit"
                                    className="submit"
                                  >
                                    {session ? (
                                      <>
                                        <span>
                                          Response with{" "}
                                          <i>{session.user?.name}</i>
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
                                </>
                              )}
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
                                          <Image
                                            alt={reply.user.name}
                                            src={reply.user.image}
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
                                              {reply.user.name}
                                            </a>
                                          </b>{" "}
                                          <span className="says">says:</span>
                                        </div>
                                        <div className="comment-metadata">
                                          <time>
                                            {reply.dateCreated}
                                              
                                          </time>
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
                                        >
                                          Reply (aun no funciona)
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
                    Commenta algo{" "}
                    <button
                      onClick={() => setChange(!change)}
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
                  </h4>
                  {change && (
                    <form
                      onSubmit={GoogleSignIn}
                      id="commentform"
                      className="comment-form"
                      noValidate
                    >
                      <p className="comment-notes">
                        <span id="email-notes">
                          Coloca tu comentario (si es hate requerda que tengo tu
                          correo XD)
                        </span>
                        <span className="required-field-message">
                          <span className="required"></span>
                        </span>
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
                          value={commentString}
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsBlock;
