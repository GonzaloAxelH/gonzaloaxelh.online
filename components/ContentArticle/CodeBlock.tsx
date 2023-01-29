import { UIContext } from "@/context/UIContext";
import React, { useContext } from "react";
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";
//@ts-ignore
import { atelierForestDark as theme } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { atelierForestLight as themelight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
//@ts-ignore

const style = {
  borderRadius: "0.8em",
  padding: "0.1rem",
  fontFamily: "'Fira Code', monospace",
  background: "#1b1a1f",
  border: "1px solid #2C2C2C",
};

const CodeBlock = ({ code, language, metastring ,caption}: any) => {
  const {themeGlobal} = useContext(UIContext)

  const CODE = code.reduce((acc: any, el: any) => {
    return acc + `${el.plain_text}`;
  }, ``);
  const co = caption.split("+")
  
  
const ADDED =JSON.parse( JSON.stringify(co[0] || "['asd']"))
const REMOVED = JSON.parse(JSON.stringify(co[1]  || "['asdad']" ));
  
 // console.log(customLines);

  let mode = false
  if (mode) {
    return (
      //@ts-ignore
      <div style={style}>
        <span
          style={{
            color: "#ebdbb2",
            padding: "2px",
            fontWeight: "bold",
          }}
        >
          {language}
        </span>
        <SyntaxHighlighter
          customStyle={{ backgroundColor: "#1b1a1f" }}
          children={CODE}
          language={language}
          style={theme}
        />
      </div>
    );
  } else {
    return (
      <div>
        <div style={{ flex: 1, width: "100%", flexDirection: "column" }}>
          <SyntaxHighlighter
            style={ themeGlobal ? theme :themelight}
            showLineNumbers
            wrapLines={true}
            customStyle={{ backgroundColor: "rgb(34, 33, 42)" }}
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
  }
};

export default CodeBlock;


/* 
 <div>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="relative not-prose">
            <pre
              className={`rounded-xl relative overflow-hidden ${className}`}
              style={style}
            >
              <div className="relative flex text-xs leading-6 ">
                <div className="flex items-center flex-none px-4 py-1 mt-2 text-teal-400 border-t border-b border-t-transparent border-b-teal-400">
                  {JSON.stringify(language).replace(/['"]+/g, "").toUpperCase()}
                </div>
                <div className="flex flex-auto pt-2 overflow-hidden rounded-tr-xl">
                  <div className="flex-auto -mr-px border rounded-tl bg-slate-700/50 border-slate-500/30"></div>
                </div>
                <div className="absolute flex items-center h-8 pl-4 right-5 top-[9px]">
                  <div className="relative flex -mr-2">{CopyCodeButton}</div>
                </div>
              </div>
              <div className="relative w-auto p-5 overflow-auto prose text-gray-300 prose-full-width">
                <span>
                  {tokens.map((line, i) => {
                    const lineProps = getLineProps({ line, key: i });

                    if (shouldHighlightLine(i)) {
                      lineProps.className = `${lineProps.className} highlight-line`;
                    }

                    return (
                      <div key={i} {...lineProps}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    );
                  })}
                </span>
              </div>
              
              <div className="absolute w-8 top-[45px] right-0 bg-gradient-to-l from-midnight code-fade"></div>
            </pre>
          </div>
        )}
      </Highlight>
    </div>
*/