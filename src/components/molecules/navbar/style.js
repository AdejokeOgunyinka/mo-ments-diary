import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  background-color: #d1d2d1;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  width: 35%;
  height: 100%;
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
`;
