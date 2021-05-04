import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: #d1d2d1;
  margin-bottom: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media(max-width: 280px){
    height: 200px;
  }

  @media(min-width: 320px){
    height: 255px;
  }

  @media(min-width: 360px){
    height: 280px;
  }

  @media(min-width: 540px){
    height: 380px;
  }

  @media(min-width: 768px){
    height: 400px;
  }
`;

export const TextContainer = styled.div`
  flex-basis: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

export const PictureContainer = styled.div`
  flex-basis: 20%;
  width: 200px;
  height: 200px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: 30px;

  @media(min-width:280px){
    width: 80px;
    height: 80px;
  }

  @media(min-width: 360px){
    width: 100px;
    height: 100px;
  }

  @media(min-width: 414px){
    width: 100px;
    height: 100px;
  }

  @media(min-width: 540px){
    width: 150px;
    height: 150px;
  }

`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const Header = styled.h1`
  font-family: Ubuntu;
  font-size: 40px;
  font-size: 300;
  box-sizing: border-box;

  @media(min-width:280px){
    font-size: 15px;
  }

  @media(min-width: 320px){
    font-size: 18px;
  }

  @media(min-width: 360px){
    font-size: 16px;
  }

  @media(min-width: 375px){
    font-size: 22px;
  }

  @media(min-width: 411px){
    font-size: 18px;
  }

  @media(min-width: 540px){
    font-size: 25px;
  }
`;

export const Text = styled.p`
  font-family: Ubuntu;
  font-size: 22px;
  font-weight: 100;
  margin-left: 100px;
  margin-right: 100px;
  padding-bottom: 25px;

  @media(min-width:280px){
    font-size: 11px;
    margin-left: 15px;
    margin-right: 15px;
  }

  @media(min-width: 320px){
    font-size: 15px;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media(min-width: 360px){
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media(min-width: 411px){
    font-size: 17px;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media(min-width: 540px){
    font-size: 20px;
    margin-left: 25px;
    margin-right: 25px;
  }

  @media(min-width: 768px){
    font-size: 25px;
    margin-left: 30px;
    margin-right: 30px;
  }
`;

