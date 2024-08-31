import React from "react";

import styled from "styled-components";

const Hds = styled.header`
  nav {
    ul {
      li {
        a {
          &.active {
            opacity: 1;
          }
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <Hds className="px-8">
      <nav>
        <ul className="flex">
          <li>
            <a href="#" className="block py-5 px-3 opacity-35 font-bold active">
              Main
            </a>
          </li>
          <li>
            <a href="#" className="block py-5 px-3 opacity-35 font-bold">
              Counting
            </a>
          </li>
          <li>
            <a href="#" className="block py-5 px-3 opacity-35 font-bold">
              Basic Tee 6-Pack
            </a>
          </li>
        </ul>
      </nav>
    </Hds>
  );
};

export default Header;
