import React from 'react'
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <Cta>
          <CtaLogoOne src="/images/cta-logo-one.svg"></CtaLogoOne>
          <SignUP>Get All There</SignUP>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta debitis unde recusandae, amet provident sequi ea quos nihil quam earum.
              </Desc>
          <CtaLogoTWO src="/images/cta-logo-two.png"></CtaLogoTWO>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta debitis unde recusandae, amet provident sequi ea quos nihil quam earum.
              </Desc>
        </Cta>
        <BgImage />
      </Content>
    </Container>
  )
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/login-background.jpg'); 
  position: absolute;
  top: 0;
  right:0;
  left:0;
  z-index:-1;
`;

const Cta = styled.div`
  margin-bottom: 2px;
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CtaLogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height:1px;
  display:block;
  width:100%;
`;

const SignUP = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 15px;
    padding: 16px 0;
    border: 1px solid transparent;
    border-bottom: 4px;
    cursor:pointer;
    &:hover {
      background-color: #0483ee;
    }
`;

const Desc = styled.p `
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CtaLogoTWO = styled.img `
   max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;