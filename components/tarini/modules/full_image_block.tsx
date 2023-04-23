import { url } from "inspector";
import { useState } from "react";

function FullImageBlock(props: any) {
  let data = props.props;
  return (
    <div
      style={{
        backgroundImage: data.data.image ? `url(${data.data.image})` : "",
        height: "6rem",
        backgroundRepeat: "repeat-x",
        backgroundSize: "contain",
      }}
    ></div>
  );
}
export default FullImageBlock;
