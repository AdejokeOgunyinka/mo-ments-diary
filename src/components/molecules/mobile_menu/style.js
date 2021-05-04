import styled from 'styled-components';
import {AiOutlineClose} from 'react-icons/ai';

export const MenuContainer = styled.div`
    position: absolute;
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #d1d2d1;

    @media(max-width: 320px){
        width: 200px;
    }

    @media(min-width: 411px){
        width: 280px;
    }

    @media(min-width: 540px){
        width: 350px;
    }

    @media(min-width: 768px){
        width: 500px;
    }

    @media(min-width: 1024px){
        width: 700px;
    }
`;

export const CloseMenuContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const CloseMenuIcon = styled(AiOutlineClose)`
    width: 35px;
    height: 30px;
    padding: 15px;

    @media(max-width: 375px){
        width: 40px;
        height: 35px;
        padding-top: 25px;
    }

    @media(min-width: 411px){
        width: 50px;
        height: 45px;
    }

    @media(min-width: 414px){
        width: 55px;
        height: 50px;
    }

    @media(min-width: 540px){
        width: 45px;
        height: 50px;
    }

    @media(min-width: 768px){
        width: 55px;
        height: 55px;
        padding-top: 25px;
    }

    @media(min-width: 1024px){
        width: 95px;
        height: 75px;
    }
`;

export const MenuTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 400px;
    align-self: center;
    justify-content: space-evenly;

    @media(min-width: 540px){
        width: 270px;
    }

    @media(min-width: 768px){
        width: 400px;
        height: 700px;
    }

    @media(min-width: 1024px){
        width: 500px;
        height: 1000px;
    }
`;

export const Logo = styled.img`
    width: 100%;
    height: 20%;
    object-fit: contain;

    @media(min-width: 540px){
        height: 30%;
    }

    @media(min-width: 768px){
        height: 35%;
    }

    @media(min-width: 1024px){
        height: 47%;
    }
`;

export const MenuButton = styled.button`
    outline: none;
    border: none;
    background: none;
    width: 100px;
    height: 25px;
    align-self: center;
    font-size: 20px;
    cursor: pointer;
    font-family: Ubuntu;
    font-size: 18px;
    font-weight: 500;

    button:focus {
        outline: none;
    }

    @media(min-width: 411px){
        font-size: 20px;
    }

    @media(min-width: 768px){
        font-size: 27px;
        height: 50px;
        width: 150px;
    }

    @media(min-width: 1024px){
        font-size: 38px;
        height: 150px;
        width: 200px;
    }
`;
