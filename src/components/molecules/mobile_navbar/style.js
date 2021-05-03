import styled from 'styled-components';
import {AiOutlineMenu} from 'react-icons/ai';


export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75px;
  background-color: #d1d2d1;
  box-sizing: border-box;

  @media(min-width: 768px){
    height: 110px;
  }

  @media(min-width:1024px){
      height: 150px;
  }
`;

export const LogoContainer = styled.div`
  flex-basis: 40%;
  height: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const HamburgerContainer = styled.div`  
    flex-basis: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const Hamburger = styled(AiOutlineMenu)`
    height: 30px;
    width: 25px;
    padding: 25px;

    @media(min-width: 768px){
        padding: 35px;
        height: 35px;
        width: 35px;
      }
    
      @media(min-width:1024px){
        padding: 55px;
        height: 40px;
        width: 40px;
      }

`;
