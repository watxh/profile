import styled from "styled-components";
import React, { Component } from "react";
import Projectcard from "../molecules/Projectcard";
import { useState } from 'react';

import projects from "../../data/projects"

const Projectlist = () => {

  const [cardnum, setCardnum] = useState(0);
  const [cardnumb, setCardnumb] = useState(0);

  const cardclick = (num) =>{
    if(cardnum!==0){
      setCardnumb(cardnum);
    }
    setCardnum(num);
  }

  return (
    <Project>
      <Name>🔥 PROJECT</Name>
      <Projectgroup>
        {projects.map(({ num,name,color }) => (
          <div onClick={() => cardclick(num)}>
          <Projectcard
            num={num}
            image={require(`../../assets/projectimage/${name}.png`)}
            name={name}
            color={color}
            cardnum = {cardnum}
            cardnumb = {cardnumb}
          />
          </div>
        ))}
      </Projectgroup>
    </Project>
  );
};

const Project = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  margin-top: 330px;
`;

const Name = styled.div`
  color: black;
  margin-left:15px;
  font-size: 40px;
  font-family: "Baloo Da 2", cursive;
`;

const Projectgroup = styled.div`
  top: 80px;
  display: flex;
  flex-direction: row;
  margin-top:50px;
  flex-wrap: wrap;
`;

export default Projectlist;
