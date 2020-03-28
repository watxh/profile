import styled from 'styled-components';
import React, { Component }  from 'react';

const Profilecard = () =>{
    return(
        <Card>
            <Profileimagebox>
                <Profileimage src = "/profile/profileimage.jpg"/>
            </Profileimagebox>
            <Namebar>Jung Min Kang</Namebar>
        </Card>
    )
}

const Card = styled.div `
    background-color:white;
    top:0;bottom:0;left:0;right:0;
    width:880px;
    height:320px;
    box-shadow:5px 5px 10px rgba(0,0,0,0.25);
    @media (max-width: 768px) {
        width:300px;
        height:310px;
        margin-top:50px;
    }
`;

const Profileimagebox = styled.div `
    position:relative;
    left:115px;
    top:60px;
    width:200px;
    height:200px;
    border-radius: 70%;
    overflow: hidden;
    box-shadow:2px 3px 6px rgba(0,0,0,0.28);
    @media (max-width: 768px) {
        left:80px;
        top:-50px;
        width:140px;
        height:140px;
        box-shadow:0px 3px 6px rgba(0,0,0,0.28);
    }
`;

const Profileimage = styled.img `
    width:100%;
    height:auto;
`;

const Namebar = styled.div`
    position:relative;
    left:440px;
    top:-130px;
    color:black;
    font-size:40px;
    font-family: 'Ubuntu', sans-serif;
    display:inline;
    @media (max-width: 768px) {
        left:30px;
    }
`

export default Profilecard;