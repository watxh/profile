import styled, {css, keyframes} from "styled-components";
import React, { Component } from "react";

const Projectcard = ({ num, image, name, color, cardnum, cardnumb }) => {
  return (
    <>
      {
        cardnum === 0
          ? 
          <Cardcover>
            <Card color={color}>
              <Cardimage src={image}/>
            </Card>
          </Cardcover>
          :<>
            {
              cardnum === num
                ?
                <>
                {
                  parseInt((cardnumb-1)/4) === parseInt((num-1)/4)
                  ?
                  <Cardcover big={1}>
                    <Card color={color}>
                      <Cardimage src={image}  big={1}/>
                    </Card>
                  </Cardcover>
                  :
                  <Cardcover mbig={1}>
                    <Card color={color}>
                      <Cardimage src={image}  big={1}/>
                    </Card>
                  </Cardcover>
                }
                </>
                
                : <>
                {
                  parseInt((cardnum-1)/4) === parseInt((num-1)/4)
                  ?
                  <>
                  {
                    num===cardnumb
                    ?
                    <Cardcover bigtotoosmall={1}>
                      <Card color={color} small={1}>
                        <Cardimage src={image} active={1}/>
                      </Card>
                    </Cardcover>
                    :
                    <Cardcover>
                      <Card color={color} small={1}>
                        <Cardimage src={image} active={1}/>
                      </Card>
                    </Cardcover>
                  }
                  </>
                  :<>
                  {
                    num===cardnumb
                    ?
                    <Cardcover bigtosmall={1}>
                      <Card color={color} big={1}>
                        <Cardimage src={image} big={1}/>
                      </Card>
                    </Cardcover>
                    :
                    <>
                    {
                      parseInt((cardnumb-1)/4) === parseInt((num-1)/4)
                      ?
                      <Cardcover>
                        <Card color={color} big={1}>
                          <Cardimage src={image} big={1}/>
                        </Card>
                      </Cardcover>
                      :
                      <Cardcover>
                        <Card color={color}>
                          <Cardimage src={image} big={1}/>
                        </Card>
                      </Cardcover>
                    }
                    </>
                  }
                  </>
                }
                </>
            }
          </>
      }
    </>
  );
};

const toobigwidth = keyframes`
  0% {
    width:0px;
  }
  100% {
    width:900px;
  }
`

const mtoobigwidth = keyframes`
  0% {
    width:270px;
  }
  100% {
    width:900px;
  }
`

const bigtotoosmallwidth = keyframes`
  0% {
    width:900px;
  }
  100% {
    width:60px;
  }
`

const bigtosmallwidth = keyframes`
  0% {
    width:900px;
  }
  100% {
    width:270px;
  }
`

const smallwidth = keyframes`
  0% {
    width:270px;
  }
  100% {
    width:60px;
  }
`

const bigwidth = keyframes`
  0% {
    width:60px;
  }
  100% {
    width:270px;
  }
`

const smallwidthopacity = keyframes`
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
`

const bigwidthopacity = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`

const Cardcover = styled.div`
  background-color:#D9D9D9;
  border-radius: 10px;
  ${({big}) => big && css`
   animation: ${toobigwidth} 1s;
   width:900px;
  ` }
  ${({mbig}) => mbig && css`
   animation: ${mtoobigwidth} 1s;
   width:900px;
  ` }
  ${({bigtotoosmall}) => bigtotoosmall && css`
   animation: ${bigtotoosmallwidth} 1s;
  ` }
  ${({bigtosmall}) => bigtosmall && css`
   animation: ${bigtosmallwidth} 1s;
  ` }
  ${({small}) => small && css`
   animation: ${smallwidth} 1s;
  ` }
  height: 350px;
  margin-right:15px;
  margin-left:15px;
  margin-bottom:30px;
  display:flex;
  justify-content:left;
  align-items:center;
  
  box-shadow:3px 3px 5px rgba(0,0,0,0.28);
`;

const Card = styled.div`
  ${({ color }) => color && css`
    background: ${color};
  `};
  border-radius: 10px;
  width:270px;
  height: 350px;
  display:flex;
  justify-content:center;
  align-items:center;
  box-shadow:3px 3px 5px rgba(0,0,0,0.28);
  transition: all 0.7s;

  ${({big}) => big && css`
   animation: ${bigwidth} 1s;
   width:270px;
  ` }

  ${({small}) => small && css`
   animation: ${smallwidth} 1s;
   width:60px;
  ` }

  &:hover {
    transform: scale(1.02);
  }
`;

const Cardimage = styled.img`
  width:250px;
  pointer-events: none;
  ${({active}) => active && css`
   animation: ${smallwidthopacity} 0.2s;
   opacity:0;
  ` }
  ${({big}) => big && css`
   animation: ${bigwidthopacity} 1.3s;
   opacity:1;
  ` }
`;

export default Projectcard;
