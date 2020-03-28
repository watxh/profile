import styled from "styled-components";
import React, { Component } from "react";

import Profilecontents from "../molecules/Profilecontents";

const Profilecard = () => {
  return (
    <Card>
      <Profilecontents />
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 880px;
  height: 320px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  margin-top: 130px;
  @media (max-width: 768px) {
    width: 300px;
    height: 310px;
    margin-top: 110px;
  }
`;

export default Profilecard;
