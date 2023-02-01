import { UIContext } from "@/context/UIContext";
import React, { useContext } from "react";
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";
//@ts-ignore
import { androidstudio as theme } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { githubGist as themelight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
//@ts-ignore


const CodeBlock = ({ code, language, metastring, caption }: any) => {
  const { themeGlobal } = useContext(UIContext);

  const CODE = code.reduce((acc: any, el: any) => {
    return acc + `${el.plain_text}`;
  }, ``);
  const co = caption.split("+");

  const ADDED = JSON.parse(JSON.stringify(co[0] || "['asd']"));
  const REMOVED = JSON.parse(JSON.stringify(co[1] || "['asdad']"));

  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        flexDirection: "column",
        border: `1px solid ${!themeGlobal ? "#3F3F3F" : "#3F3F3F"}`,
        margin: "1rem 0 2rem 0",
        borderRadius: "5px",
      }}
    >
      <SyntaxHighlighter
        style={!themeGlobal ? theme : theme}
        showLineNumbers
        wrapLines={true}
        lineProps={(lineNumber) => {
          let style: any = { display: "block" };
          if (ADDED.includes(lineNumber)) {
            style.backgroundColor = "rgba(70,149,74,0.15)";
            style.borderLeft = "3px solid green";
            style.width = "100%";
          } else if (REMOVED.includes(lineNumber)) {
            style.backgroundColor = "rgba(229,83,75,0.15)";
            style.borderLeft = "3px solid red";
            style.width = "100%";
          }
          return { style };
        }}
      >
        {CODE}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
