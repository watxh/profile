import styled from 'styled-components';
import React, { Component }  from 'react';

const Topbar = () =>{
    return (
        <Bar>
            <Name>WATXH</Name>
            <a href = "https://github.com/watxh" target="_blank">
                <Snsimage src="/topbarimage/githubL.png"/>
            </a>
            <a href = "https://www.facebook.com/profile.php?id=100009915570975" target="_blank">
                <Snsimage src="/topbarimage/facebookL.png"/>
            </a>
        </Bar>
    )
}

const Bar = styled.div `
    position:fixed;
    top:0;
    left:0;
    right:0;
    background-color:#FFFFFF;
    width:100%;
    height:65px;
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    text-align:right;
`

const Name = styled.div`
    position:absolute;
    left:120px;
    color:black;
    line-height:65px;
    font-size:30px;
    font-family: 'Baloo Da 2', cursive;
    @media (max-width: 768px) {
        left:30px;
    }
`

const Snsimage = styled.img`
    position:relative;
    top:17px;
    right:100px;
    width:30px;
    height:auto;
    margin-right:10px;
    @media (max-width: 768px) {
        right:10px;
        width:30px;
        top:18px;
    }
`

export default Topbar;