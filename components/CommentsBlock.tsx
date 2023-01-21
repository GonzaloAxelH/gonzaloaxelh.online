import React, { useEffect, useState } from "react";
import { auth } from "@/settings/firebase";
import { provider } from "@/settings/firebase";

import { useSession, signIn, signOut } from "next-auth/react";

import {  GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { addComment, addSubComment, deleteSubComment, getComments } from "@/services/firebase";
//@ts-ignore
const CommentsBlock = () => {
  const [value, setValue] = useState({});
  const [email, setEmail] = useState("")
  const [name,setName] = useState("")
  const handleClick = (e: any) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result: any) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        setValue(user);
        console.log(user)
        setName(user.displayName)
        setEmail(user.email)
        localStorage.setItem("user", JSON.stringify(user));
        addComm()
  //       addResponseComment(
    //       "Mi coghjkhjkhmentario cualquiera 2 @zaidzaid5453  xd 🤑 🙃"
      //   );
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error)
      });
  };

  const GoogleSignIn = (e: any) => {
    e.preventDefault();
    if (session) {
      console.log("Ya te habais registrado antes, procede a mandar el comentario.")
    } else {
            console.log("No te has logueado,Iniciando session ....");
            
            signIn();
    }
  }

  useEffect(() => {
    setValue(JSON.parse(JSON.stringify(localStorage.getItem("user"))) || {});
    loadCommentsByArticle()
  }, []);

  const loadCommentsByArticle = async () => {
    
    const comments = await getComments(); 
    console.log(comments)
  }
  const addResponseComment = async (comment: any) => {

    await addSubComment({
      comment: comment,
      idUser: "89a3080c-d8bc-4010-8f61-ba33f21aefc8",
      emailUser: "test@gmail.com",
      idcomment:"qEDnTm9qk4uLi0vnGIQn"
    });
  }

  const deleteReplyComment = async (comment: any) => {
    let comm = {
      idUser: "89a3080c-d8bc-4010-8f61-ba33f21aefc8",
      emailUser: "test@gmail.com",
      comment: comment,
    };
    await deleteSubComment(comm, "qEDnTm9qk4uLi0vnGIQn");
  };

  const addComm = async () => {
    await addComment()
  }
 const { data: session } = useSession();
  return (
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
                  id="comment-3818"
                  className="comment even thread-even depth-1 parent"
                >
                  <article id="div-comment-3818" className="comment-body">
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
                        <a href="https://ohio.clbthemes.com/standard/#comment-3818">
                          <time dateTime="2023-01-21T00:49:36+00:00">
                            January 21, 2023 at 12:49 am
                          </time>
                        </a>
                      </div>
                      <em className="comment-awaiting-moderation">
                        Your comment is awaiting moderation.
                      </em>
                    </footer>
                    <div className="comment-content">
                      <p>Este ess mi comentario gilazo</p>
                    </div>
                    <div className="reply">
                      <a
                        rel="nofollow"
                        className="comment-reply-link"
                        href="https://ohio.clbthemes.com/standard/?replytocom=3818#respond"
                        data-commentid={3818}
                        data-postid={17953}
                        data-belowelement="div-comment-3818"
                        data-respondelement="respond"
                        data-replyto="Reply to Gonzalo"
                        aria-label="Reply to Gonzalo"
                      >
                        Reply
                      </a>
                    </div>
                  </article>
                  <ol className="children">
                    <li id="comment-3819" className="comment odd alt depth-2">
                      <article id="div-comment-3819" className="comment-body">
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
                            <a href="https://ohio.clbthemes.com/standard/#comment-3819">
                              <time dateTime="2023-01-21T00:49:54+00:00">
                                January 21, 2023 at 12:49 am
                              </time>
                            </a>
                          </div>
                          <em className="comment-awaiting-moderation">
                            Your comment is awaiting moderation.
                          </em>
                        </footer>
                        <div className="comment-content">
                          <p>asdasd este es mi reply</p>
                        </div>
                        <div className="reply">
                          <a
                            rel="nofollow"
                            className="comment-reply-link"
                            href="https://ohio.clbthemes.com/standard/?replytocom=3819#respond"
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
                </li>
              </ul>
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
                  onSubmit={GoogleSignIn}
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
                    <span>
                      <button
                        name="submit"
                        type="submit"
                        id="submit"
                        className="submit"
                      >
                        <span style={{ marginRight: "10px" }}>
                          Post Comment{" "}
                        </span>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                          alt=""
                          width={30}
                          height={30}
                        />
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
                {session ? (
                  <>
                    <p>
                      {" "}
                      <b>
                        YA TE REGISTRARSTE : Signed in as {session?.user?.email}
                      </b>{" "}
                    </p>
                    <button onClick={() => signOut()}>SALIR</button>
                  </>
                ) : (
                  <p>
                    {" "}
                    <b>AUN NO TE REGISTRARSTE</b>{" "}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsBlock;
