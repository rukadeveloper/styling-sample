import React from "react";

import styled from "styled-components";

const ImgBlock = styled.section`
  height: 500px;
  margin-bottom: 45px;
  .all_tshirts {
    background: url("../assets/tshirts.webp") no-repeat center/cover;
  }
  .tshirts_black {
    background: url("../assets/tshirts_black.jpeg") no-repeat center/cover;
  }
  .tshirts_gray {
    background: url("../assets/tshirts.webp") no-repeat center/cover;
  }
  .tshirts_white {
    background: url("../assets/tshirts_black.jpeg") no-repeat center/cover;
  }
`;

const ImageBlock = () => {
  return (
    <ImgBlock className="grid grid-cols-3 grid-rows-2 grid-flow-col gap-4">
      <div className="all_tshirts row-span-2 rounded overflow-hidden border border-black"></div>
      <div className="tshirts_black rounded overflow-hidden border border-black"></div>
      <div className="tshirts_gray rounded overflow-hidden border border-black"></div>
      <div className="tshirts_white row-span-2 rounded overflow-hidden border border-black"></div>
    </ImgBlock>
  );
};

export default ImageBlock;
