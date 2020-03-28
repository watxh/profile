import styled from "styled-components";
import React, { Component } from "react";

const Topbar = () => {
  return (
    <Bar>
      <Barstyle>
        <Name>WATXH</Name>
        <div>
          <a href="https://github.com/watxh" target="_blank">
            <Snsimage src="/topbarimage/githubL.png" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009915570975"
            target="_blank"
          >
            <Snsimage src="/topbarimage/facebookL.png" />
          </a>
        </div>
      </Barstyle>
    </Bar>
  );
};

const Barstyle = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width:90%;
  }
`;

const Bar = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 65px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  text-align: right;
`;

const Name = styled.div`
  color: black;
  line-height: 65px;
  font-size: 30px;
  font-family: "Baloo Da 2", cursive;
  @media (max-width: 768px) {
  }
`;

const Snsimage = styled.img`
  width: 30px;
  height: auto;
  margin-right: 10px;
  @media (max-width: 768px) {
  }
`;

export default Topbar;
