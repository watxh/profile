import styled, {css} from "styled-components";
import React, { Component } from "react";

const Projectcard = ({image,name,color}) => {
  return (
    <>
      <Card color={color}>
        <Cardimage src = {image}/>
      </Card>
    </>
  );
};

const Card = styled.div`
  ${({ color }) => color && css`
    background: ${color};
  `};
  border-radius: 10px;
  width: 270px;
  height: 350px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-right:30px;
  margin-bottom:30px;
  box-shadow:3px 3px 5px rgba(0,0,0,0.28);
  transition: all 0.7s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Cardimage = styled.img`
  width:250px;
`;

export default Projectcard;
