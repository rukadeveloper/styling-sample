import React from "react";

import styled from "styled-components";

import ImageBlock from "./ImageBlock";
import SectionFirst from "./SectionFirst";

const Mains = styled.main``;

const Main = () => {
  return (
    <Mains className="px-8">
      <ImageBlock />
      <SectionFirst />
    </Mains>
  );
};

export default Main;
