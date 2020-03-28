import styled from 'styled-components';
import React, { Component }  from 'react';
import Projectcard from '../molecules/Projectcard';

const Projectlist = () =>{
    return(
        <Project>
            <Name>
                🔥 PROJECT
            </Name>
            <Projectgroup>
                <Projectcard>
                    
                </Projectcard>
            </Projectgroup>
        </Project>
    );
}

const Project = styled.div`
    position:relative;
    top:350px;
`;

const Name = styled.div`
    position:relative;
    color:black;
    font-size:40px;
    font-family: 'Baloo Da 2', cursive;
    left:-450px;
`;

const Projectgroup = styled.div`
    position:relative;
    top:80px;
    display:flex;
    flex-direction:row;
`;

export default Projectlist;