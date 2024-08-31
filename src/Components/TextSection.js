import React from "react";

import styled from "styled-components";

const TextPart = styled.div`
  h2 {
    margin-bottom: 45px;
  }
  p {
    margin-bottom: 45px;
  }

  .lists {
    h3 {
      margin-bottom: 10px;
    }
  }
`;

const TextSection = () => {
  return (
    <TextPart className="border-r pr-8 border-stone-200">
      <h2 className="text-2xl font-bold">Basic Tee 6-Pack</h2>
      <p>
        The Basic Tee 6-Pack allows you to fully express your personality with
        theme grayscale <br />
        options. Feeding adventuno? Put on a feature gray tee. Want to be a
        trandsetter? Try out eudtive <br />
        colorway: "Black". need to.....
      </p>
      <div className="lists">
        <h3 className="text-xl">Highways</h3>
        <ul>
          <li className="text-sm mb-2 flex items-center">
            <span className="block w-2 h-2 rounded-full border border-black mr-3"></span>
            Handout and brown lacdly
          </li>
          <li className="text-sm mb-2 flex items-center">
            <span className="block w-2 h-2 rounded-full border border-black mr-3"></span>
            Dyec with our propahdry auytors
          </li>
          <li className="text-sm mb-2 flex items-center">
            <span className="block w-2 h-2 rounded-full border border-black mr-3"></span>
            Put washed pro shudos
          </li>
          <li className="text-sm mb-2 flex items-center">
            <span className="block w-2 h-2 rounded-full border border-black mr-3"></span>
            Linho-scft 100% dootes
          </li>
        </ul>
      </div>
    </TextPart>
  );
};

export default TextSection;
