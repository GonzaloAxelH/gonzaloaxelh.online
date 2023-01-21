const Text = ({ texts }: any) => {
  if (!texts) {
    return null;
  }
  return texts.map((value: any, index: number) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    return (
      <span
        key={index}
        className={[
          bold ? "p-bold" : null,
          italic ? "p-italic" : null,
          code ? "p-code" : null,
          strikethrough ? "p-linethrough" : null,
          underline ? "p-underline" : null,
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text?.link ? (
          <a href={text?.link?.url || "#"} target="_blank">
            {text?.content}
          </a>
        ) : (
          text?.content || ""
        )}
      </span>
    );
  });
};
export default Text;
