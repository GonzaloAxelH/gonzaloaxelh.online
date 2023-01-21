import React from "react";
import ElementsbarRight from "../ElementsbarRight";
import ElementsbarLeft from "../ElementsbarLeft";

const Container = ({ children }: any) => {
  return (
    <>
      <ElementsbarLeft />
      <ElementsbarRight />
      <div>{children}</div>;
    </>
  );
};

export default Container;
