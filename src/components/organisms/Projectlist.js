import styled from "styled-components";
import React, { Component } from "react";
import Projectcard from "../molecules/Projectcard";

import projects from "../../data/projects"

const Projectlist = () => {
  return (
    <Project>
      <Name>🔥 PROJECT</Name>
      <Projectgroup>
        {projects.map(({ name,color }) => (
          <Projectcard
            image={require(`../../assets/projectimage/${name}.png`)}
            name={name}
            color={color}
          />
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
