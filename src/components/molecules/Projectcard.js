import styled, {css, keyframes} from "styled-components";
import React, { Component } from "react";

const Projectcard = ({ num, name,color,pname,pcontent,pdate,ptag,psite,image, cardnum, cardnumb }) => {
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
                    <Card color={color} big={1}>
                      <Cardimage src={image}  big={1}/>
                    </Card>
                    <Cardtext>
                      <Asite href={psite}>
                        <Cardnametext>
                          {pname}
                        </Cardnametext>
                      </Asite>
                      <Cardcontenttext>
                        {pcontent.split('\n').map((line,idx) => (
                          <span key={`line-${idx}`}>{line}</span>
                        ))}
                        <br/>
                        {pdate}
                      </Cardcontenttext>
                    </Cardtext>
                    <Cardtagtext>
                          {ptag}
                    </Cardtagtext>
                  </Cardcover>
                  :
                  <Cardcover mbig={1}>
                    <Card color={color}>
                      <Cardimage src={image}  big={1}/>
                    </Card>
                    <Cardtext>
                      <Asite href={psite}>
                        <Cardnametext>
                          {pname}
                        </Cardnametext>
                      </Asite>
                      <Cardcontenttext>
                        {pcontent.split('\n').map((line,idx) => (
                          <span key={`line-${idx}`}>{line}</span>
                        ))}
                        <br/>
                        {pdate}
                      </Cardcontenttext>
                    </Cardtext>
                    <Cardtagtext>
                      {ptag}
                    </Cardtagtext>
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
                      <Card color={color}>
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
                          <Cardimage src={image}/>
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
    width:60px;
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

const textopacity = keyframes`
  0% {
    opacity:0;
  }
  70%{
    opacity:0;
  }
  100% {
    opacity:1;
  }
`

const Asite = styled.a `
  text-decoration:none;
  color: black;
`;

const Cardtext = styled.div`
  color:black;
  margin-left:50px;
  animation: ${textopacity} 1.2s;
  display:flex;
  flex-direction:column;
`;

const Cardnametext = styled.div`
  font-size:30px;
  font-family: 'Do Hyeon', sans-serif;
  margin-bottom:50px;
  display:inline-block;
  text-align:center;
`;

const Cardcontenttext = styled.div`
  font-size:25px;
  font-family: 'Do Hyeon', sans-serif;
  display:flex;
  flex-direction:column;
`;

const Cardtagtext = styled.div`
  margin-top:270px;
  font-size:25px;
  font-family: 'Do Hyeon', sans-serif;
  color:gray;
  animation: ${textopacity} 1.2s;
`;

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
