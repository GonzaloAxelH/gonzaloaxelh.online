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

const style = { borderRadius: "1rem" };

const CodeBlock = ({ code, language, metastring }: any) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  return (
    //@ts-ignore
    <div style={style}>
      <SyntaxHighlighter children={code} language={language} style={theme} />
    </div>
  );
};

export default CodeBlock;
