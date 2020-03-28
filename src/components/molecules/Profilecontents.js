import styled from "styled-components";
import React, { Component } from "react";

import Profiletext from "../atoms/Profiletext";

const Profilecontents = () => {
  return (
    <Profilecon>
      <div>
        <Profileimagebox>
          <Profileimage src="/profile/profileimage.jpg" />
        </Profileimagebox>
      </div>

      <div>
        <Namebar>Jung Min Kang</Namebar>
        <Profilegroup>
          <Profileicon src="/profile/groupL.png" />
          <Profiletext>@inudevs</Profiletext>
        </Profilegroup>
        <Profilegroup>
          <Profileicon src="/profile/locationL.png" />
          <Profiletext>Korea Digital Media Highschool</Profiletext>
        </Profilegroup>
        <Profilegroup>
          <Profileicon src="/profile/mailL.png" />
          <Profiletext>wkdcm12345@gmail.com</Profiletext>
        </Profilegroup>
      </div>
    </Profilecon>
  );
};

const Namebar = styled.div`
  color: black;
  font-size: 40px;
  font-family: "Ubuntu", sans-serif;
  margin-bottom:30px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Profilecon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom:3rem;
    width: 250px;
  }
`;

const Profilegroup = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 12px;
`;

const Profileimagebox = styled.div`
  width: 200px;
  height: 200px;
  margin-right: 4rem;
  border-radius: 70%;
  overflow: hidden;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.28);
  @media (max-width: 768px) {
    margin-right:0rem;
    margin-bottom:2rem;
    width: 140px;
    height: 140px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.28);
  }
`;

const Profileicon = styled.img`
    width:23px;
    height:23px;
    object-fit: cover;
    @media (max-width: 768px) {
        width:13px;
        height:13px;
    }
`

const Profileimage = styled.img `
    width:100%;
    height:auto;
`;


export default Profilecontents;
