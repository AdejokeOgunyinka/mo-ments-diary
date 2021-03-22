import styled from 'styled-components';


export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    background-color: #d1d2d1;
`;

export const LogoContainer = styled.div`
    width: 40%;
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
`;

export const Button = styled.button`
    width: 100px;
    height: 35px;
    margin-right: 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
`;
