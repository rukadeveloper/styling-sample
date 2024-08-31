import React from "react";

import styled from "styled-components";
import TextSection from "./TextSection";
import PriceSection from "./PriceSection";

const FirstSections = styled.section``;

const SectionFirst = () => {
  return (
    <FirstSections className="flex">
      <TextSection />
      <PriceSection />
    </FirstSections>
  );
};

export default SectionFirst;
