import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  background-color: #d1d2d1;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  width: 35%;
  height: 100%;
  @media(max-width: 540px){
    width: 700px;
  }

  @media(max-width: 411px){
    width: 1000px;
  }

  @media(max-width: 280px){
    width: 400px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const AllButtons = styled.div`
  margin-left: 450px;
  display: flex;
  align-items: center;
  width: 1000px;
  height: 100%;
  outline: none;
  border: none;
  box-sizing: border-box;
  button:focus {
    outline: none;
  }

  @media(max-width: 540px){
    margin-left: 20px;
    outline: none;
    border: none;
  }

  @media(max-width: 411px){
    margin-left: 10px;
    width: 300px;
    outline: none;
    border: none;
  }

  @media(max-width: 280px){
    margin-left: 2px;
    outline: none;
    border: none;
  }
`;

export const Button = styled.button`
  width: 90px;
  height: 35px;
  margin-right: 40px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  border: none;
  
  box-sizing: border-box;
  button:focus {
    outline: none;
  }

  @media(max-width: 540px){
    width: 68px;
    height: 35px;
    margin-right: 10px;
  }

  @media(max-width: 411px){
    width: 55px;
    height: 40px;
    border-radius: 15px;
    margin-right: 5px;
  }

  @media(max-width: 280px){
    width: 40px;
    height: 45px;
    border-radius: 10px;
    margin-right: 2px;
  }
`;
