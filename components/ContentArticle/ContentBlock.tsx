import React, { useEffect, useRef } from "react";
import CodeBlock from "./CodeBlock";
import Text from "./Text";
import Image from "next/image";
import ReactDOM from "react-dom";
const ContentBlock = ({ block }: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text texts={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="p-h1">
          <Text texts={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="p-h2">
          <Text texts={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="p-h3">
          <Text texts={value.rich_text} />
        </h3>
      );

    case "numbered_list_item":
    case "bulleted_list_item":
      return (
        <li style={{marginLeft:"2em"}} className="p-li-list">{value.rich_text[0]?.plain_text || ""}</li>
      );
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
        value.caption?.length >= 1 ? value.caption[0]?.plain_text : "";

      return (
        <figure
          className="wp-block-image size-full image-holder image-border-inset"
          style={{
            textAlign: "center",
            position: "relative",
            height: "400px",
            borderRadius: "10px",
          }}
        >
          <Image
            className="wp-image-20557"
            quality={100}
            src={src}
            blurDataURL={src}
            objectFit="contain"
            placeholder="blur"
            fill={true}
            alt={
              caption
                ? caption
                : "A visual depiction of what is being written about"
            }
            priority
          />
          <div className="img_before"></div>
          <p
            style={{
              fontSize: "12px",
              fontStyle: "italic",
              margin: "auto",
              width: "100%",
            }}
          >
            {caption
              ? caption
              : "A visual depiction of what is being written about"}
          </p>
        </figure>
      );
    case "code":
      return (
        <CodeBlock
          language={value.language}
          code={value?.rich_text || []}
          caption={value?.caption[0]?.plain_text || ""}
        />
      );

    case "callout":
      return (
        <div style={{ margin: "1rem 0" }}>
          <blockquote className="wp-block-quote">
            {value?.icon && <span>{value.icon?.emoji}</span>}
            <p> {value.rich_text[0]?.plain_text}</p>
            <p />
          </blockquote>
        </div>
      );
    case "embed":
      const codePenEmbedKey = value.url.slice(value.url.lastIndexOf("/") + 1);
      return <Codepen codePenEmbedKey={codePenEmbedKey} url={value.url} />
    case "table_of_contents":
      return <div>TOC</div>;
    case "video":
      return (
        <div className="relative overflow-hidden" >
          <iframe
            style={{border:"none",borderRadius:"8px"}}
            width="100%"
            height={400}
            src={value.external.url}
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      );
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


function Codepen({ url, codePenEmbedKey }:any) {
  return (
    <div>
      <iframe
        style={{ border: "none", borderRadius: "8px", width: "100%" }}
        height={400}
        className="w-full"
        title="Postage from Bag End"
        src={`https://codepen.io/gonzaloaxelh/embed/preview/${codePenEmbedKey}?default-tab=result`}
        loading="lazy"
        allowFullScreen
      >
        See the Pen <a href={url}>Postage from Bag End</a> by Gonzalo Axel
        (<a href="https://codepen.io/gonzaloaxelh">@gonzaloaxelh</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  );
}