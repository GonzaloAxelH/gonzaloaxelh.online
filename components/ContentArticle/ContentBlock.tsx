import React from "react";
import CodeBlock from "./CodeBlock";

const ContentBlock = ({ block }: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          From the business, until be once yet pouring got it
          <a
            href="https://1.envato.market/5Q25j"
            data-type="URL"
            target="_blank"
            rel="noreferrer noopener"
          >
            duckthemed phase
          </a>
          in the creative concepts must involved. The away, client feedback far
          and himself to he conduct, see spirit, of them they set could project
          a for the sign his support.
        </p>
      );
    case "heading_1":
      return <h2>{value.rich_text}</h2>;
    case "heading_2":
      return <h3>Using a Query</h3>;
    case "heading_3":
      return <h3>Using a Query</h3>;
    case "bulleted_list_item":
    case "numbered_list_item":
      return <></>;
    case "to_do":
      return <></>;
    case "toggle":
      return <></>;
    case "child_page":
      return <></>;
    case "image":
      const src =
        value.type === "external" ? value.external?.url : value.file?.url;
      const caption =
        value.caption.length >= 1 ? value.caption[0].plain_text : "";

      return (
        <figure className="wp-block-image size-full">
          <img
            decoding="async"
            src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/oh__img5.jpg"
            alt=""
            className="wp-image-20557"
          />
        </figure>
      );
    case "code":
      return (
        <CodeBlock
          language={value.language}
          code={`${value?.rich_text[0]?.plain_text || "Code"}`}
        />
      );

    case "callout":
      return (
        <blockquote className="wp-block-quote">
          <p>
            Getting practice furnished the where pouring the of emphasis as
            return encourage a then that times, the doing would in object we
            young been in the in the to their line helplessly or name to in of,
            and all and to more my way and opinion.
          </p>
          <p />
        </blockquote>
      );
    case "embed":
      const codePenEmbedKey = value.url?.slice(value.url?.lastIndexOf("/") + 1);
      return <></>;
    case "table_of_contents":
      return <div>TOC</div>;
    case "video":
      return <></>;
    case "quote":
      return <></>;
    case "divider":
      return <></>;
    case "file":
      const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
      return <></>;
    case "bookmark":
      return <></>;
    default:
      return <></>;
  }
};

export default ContentBlock;

const blockExample = () => {
  return (
    <div className="entry-content">
      <h3>Using a Query</h3>
      <p>
        A
        <a
          href="https://1.envato.market/5Q25j"
          target="_blank"
          rel="noreferrer noopener"
        >
          CSS
        </a>
        <dfn>pseudo-class</dfn> is a keyword added to a selector that specifies
        a special state of the selected element(s). For example,
        <a
          href="https://1.envato.market/5Q25j"
          target="_blank"
          rel="noreferrer noopener"
        >
          <code>:hover</code>
        </a>
        can be used to change a button’s color when the user’s pointer hovers
        over it.
      </p>
      <p>
        From the business, until be once yet pouring got it
        <a
          href="https://1.envato.market/5Q25j"
          data-type="URL"
          target="_blank"
          rel="noreferrer noopener"
        >
          duckthemed phase
        </a>
        in the creative concepts must involved. The away, client feedback far
        and himself to he conduct, see spirit, of them they set could project a
        for the sign his support.
      </p>
      <figure className="wp-block-image size-full">
        <img
          decoding="async"
          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/oh__img5.jpg"
          alt=""
          className="wp-image-20557"
        />
      </figure>
      <p>
        Other pseudo-elements and pseudo-class selectors,
        <code>:not()</code> can be chained with other pseudo-classes and
        pseudo-elements. For example, the following will add a “New!” word to
        list items that do not have a <code>.old</code> class name, using the
        <a
          href="https://1.envato.market/5Q25j"
          target="_blank"
          rel="noreferrer noopener"
        >
          <code>::after</code>
        </a>
      </p>
      <h3>Trivia &amp; Notes</h3>
      <p>
        The <code>:not()</code> selector is chainable with more{" "}
        <code>:not()</code> selectors. For example,
        <a
          href="https://1.envato.market/5Q25j"
          target="_blank"
          rel="noreferrer noopener"
        >
          the following
        </a>
        will match all <code>article</code>s except the one with an ID{" "}
        <code>#featured</code>, and then will filter out the articles with a
        class name
        <code>.tutorial</code>:
      </p>
      <pre className="wp-block-preformatted">
        article:not(#featured):not(.tutorial) {"{"}
        {"\n"}
        {"    "}/* style the articles that match */
        {"\n"}
        {"}"}
      </pre>
      <p>
        Just like other pseudo-elements and pseudo-class selectors,{" "}
        <code>:not()</code> can be chained with other pseudo-classes and
        pseudo-elements. For example, the following will add a “New!” word to
        list items that do not have a<code>.old</code> class name, using the
        <a
          href="https://1.envato.market/5Q25j"
          target="_blank"
          rel="noreferrer noopener"
        >
          <code>::after</code>
        </a>
        pseudo-element:
      </p>
      <pre className="wp-block-preformatted">
        li:not(.old)::after {"{"}
        {"\n"}
        {"    "}content: "New!";{"\n"}
        {"    "}color: deepPink;{"\n"}
        {"}"}
      </pre>
      <p>You can see a live demo in the Live Demo section below.</p>
      <h3>On the Specificity of Selectors</h3>
      <p>
        The specificity of the
        <code>:not()</code> pseudo-class is the specificity of its argument. The
        <code>:not()</code> pseudo-class does not add to the selector
        specificity, unlike other pseudo-classes.
      </p>
      <p>
        The
        <a
          href="https://1.envato.market/5Q25j"
          target="_blank"
          rel="noreferrer noopener"
        >
          simple selector
        </a>
        that <code>:not()</code> takes as an argument can be any of the
        following:
      </p>
      <ul>
        <li>
          Type selector (e.g <code>p</code>,<code>span</code>, etc.)
        </li>
        <li>
          Class selector (e.g <code>.element</code>,<code>.sidebar</code>, etc.)
        </li>
        <li>
          ID selector (e.g <code>#header</code>)
        </li>
        <li>
          Pseudo-class selector (e.g
          <code>
            <a
              href="https://1.envato.market/5Q25j"
              target="_blank"
              rel="noreferrer noopener"
            >
              :first-child
            </a>
          </code>
          ,
          <code>
            <a
              href="https://1.envato.market/5Q25j"
              target="_blank"
              rel="noreferrer noopener"
            >
              :last-of-type
            </a>
          </code>
          )
        </li>
      </ul>
      <h3>Reference</h3>
      <p>
        The argument passed to <code>:not()</code> can
        <em>not</em>, however, be a pseudo-
        <strong>element</strong>
        selector (such as
        <a
          href="http://tympanus.net/codrops/css_reference/before"
          target="_blank"
          rel="noreferrer noopener"
        >
          <code>::before</code>
        </a>
        and
        <a
          href="https://1.envato.market/5Q25j"
          target="_blank"
          rel="noreferrer noopener"
        >
          <code>::after</code>
        </a>
        , among others) or another negation pseudo-class selector.
      </p>
      <blockquote className="wp-block-quote">
        <p>
          Getting practice furnished the where pouring the of emphasis as return
          encourage a then that times, the doing would in object we young been
          in the in the to their line helplessly or name to in of, and all and
          to more my way and opinion.
        </p>
        <p />
      </blockquote>
      <figure className="wp-block-table">
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Employee</strong>
              </td>
              <td>
                <strong>Salary</strong>
              </td>
              <td />
            </tr>
            <tr>
              <td>
                <a
                  href="https://1.envato.market/5Q25j"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Martin
                </a>
              </td>
              <td>$1</td>
              <td>Because that’s all Steve Job’ needed for a salary.</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://1.envato.market/5Q25j"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  John
                </a>
              </td>
              <td>$100K</td>
              <td>For all the blogging he does.</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://1.envato.market/5Q25j"
                  data-type="URL"
                  data-id="https://1.envato.market/5Q25j"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Robert
                </a>
              </td>
              <td>$100M</td>
              <td>
                Pictures are worth a thousand words, right? So Tom x 1,000.
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://1.envato.market/5Q25j"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Jane
                </a>
              </td>
              <td>$100B</td>
              <td>With hair like that?! Enough said…</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h3>Useful Fallbacks</h3>
      <p>
        It’s extension live for much place. Road, are, the which, and handout
        tones. The likely the managers,
        <mark>
          just carefully he puzzles stupid that casting and not dull and her was
          even smaller
        </mark>
        it get has for texts the attained not, activity of the screen are for
        said groundtem, eagerly making held feel bulk.
      </p>
      <p>
        Just like other pseudo-elements and pseudo-class selectors,{" "}
        <code>:not()</code> can be chained with other pseudo-classes and
        pseudo-elements. For example, the following will add a “New!” word to
        list items that do not have a<code>.old</code> class name, using the
        <a
          href="https://1.envato.market/5Q25j"
          target="_blank"
          rel="noreferrer noopener"
        >
          <code>::after</code>
        </a>
        pseudo-element:
      </p>
      <pre className="wp-block-preformatted">
        element:not(.old)::after {"{"}
        {"\n"}
        {"    "}content: "New!";{"\n"}
        {"    "}color: deepPink;{"\n"}
        {"}"}
        {"   "}
      </pre>
      <p>
        You can see a live demo in the
        <a
          href="https://1.envato.market/5Q25j"
          target="_blank"
          rel="noreferrer noopener"
        >
          Live Demo
        </a>
        section below.
      </p>
    </div>
  );
};
