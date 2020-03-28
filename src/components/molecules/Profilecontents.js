import styled from 'styled-components';
import React, { Component }  from 'react';

import Profileimage from "../atoms/Profileimage"
import Profiletext from "../atoms/Profiletext"

const Profilecontents = () =>{
    return (
        <Profilecon>
            <Profilegroup>
                <Profileimage src="/profile/groupL.png"/>
                <Profiletext>@inudevs</Profiletext>
            </Profilegroup>
            <Profilegroup>
            <Profileimage src="/profile/locationL.png"/>
                <Profiletext>Korea Digital Media Highschool</Profiletext>
            </Profilegroup>
            <Profilegroup>
            <Profileimage src="/profile/mailL.png"/>
                <Profiletext>wkdcm12345@gmail.com</Profiletext>
            </Profilegroup>
        </Profilecon>
    );
}

const Profilecon = styled.div`
    position:relative;
    left:440px;
    top:-94px;
    display:flex;
    flex-direction:column;
    width:500px;

    @media (max-width: 768px) {
        left:45px;
        top:5px;
        width:250px;
    }
`;

const Profilegroup = styled.div `
    display:flex;
    flex-direction:row;
    padding-bottom:12px;
`;

export default Profilecontents;