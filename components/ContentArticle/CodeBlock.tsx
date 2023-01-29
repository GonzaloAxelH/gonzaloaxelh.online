import { UIContext } from "@/context/UIContext";
import React, { useContext } from "react";
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";
//@ts-ignore
import { gruvboxDark as theme } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { atomOneLight as themelight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
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
    <div>
      <div style={{ flex: 1, width: "100%", flexDirection: "column" }}>
        <SyntaxHighlighter
          style={themeGlobal ? theme : themelight}
          showLineNumbers
          wrapLines={true}
          
          lineProps={(lineNumber) => {
            let style: any = { display: "block" };
            if (ADDED.includes(lineNumber)) {
              style.backgroundColor = "rgba(70,149,74,0.15)";
              style.borderLeft = "3px solid green";
            } else if (REMOVED.includes(lineNumber)) {
              style.backgroundColor = "rgba(229,83,75,0.15)";
              style.borderLeft = "3px solid red";
            }
            return { style };
          }}
        >
          {CODE}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
