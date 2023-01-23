import React from "react";
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";
//@ts-ignore
import { gruvboxDark as theme } from "react-syntax-highlighter/dist/cjs/styles/hljs";
//@ts-ignore

const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta: any) => {
  if (!RE.test(meta)) {
    return () => false;
  }
  //@ts-ignore
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)));
  return (index: any) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    );
    return inRange;
  };
};

const style = {
  borderRadius: "12px",
  padding: "0.6rem",
  
  background: "#1E1C22",
};

const CodeBlock = ({ code, language, metastring }: any) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  console.log({shouldHighlightLine});

  return (
    //@ts-ignore
    <div style={style}>
      <span
        style={{
          color: "#ebdbb2",
          background: "#1E1C22",
          padding: "10px",
          fontWeight: "bold",
        }}
      >
        {language}
      </span>
      <SyntaxHighlighter
        customStyle={{ backgroundColor: "#1E1C22" }}
        children={code}
        language={language}
        style={theme}
      />
    </div>
  );
};

export default CodeBlock;
