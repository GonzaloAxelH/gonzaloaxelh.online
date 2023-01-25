import React from "react";

const ElementsbarRight = () => {
  return (
    <ul className="elements-bar right -unlist">
      <li>
        <div className="social-bar dynamic-typo">
          <ul className="social-bar-holder titles-typo -small-t -unlist vc_hidden-md">
            <li>Follow Us</li>
            <li>—</li>
            <li>
              <a
                href="https://www.facebook.com/colabrio/"
                target="_blank"
                rel="nofollow"
                className="-undash facebook"
              >
                Fb.
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/colabrio/"
                target="_blank"
                rel="nofollow"
                className="-undash behance"
              >
                Be.
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/colabrio/"
                target="_blank"
                rel="nofollow"
                className="-undash youtube"
              >
                Yt.
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );

};

export default ElementsbarRight;
