import styled from 'styled-components';


export const SignUpContainer = styled.div`
    width: 100%;
    height: 500px;
    align-self: center;
    display: flex;
    flex-direction: row;
    padding-top: 100px;
`;

export const PictureContainer = styled.div`
    flex-basis: 50%;
    height: 100%;
    border-left: 1px dotted black;
`;

export const Picture = styled.img`
    height: 100%;
    width: 100%;
`;

export const SignUpFormContainer = styled.div`
    flex-basis: 35%;
    height: 85%;
    background-color: #d1d2d1;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    margin-left: 30px;
`;

export const TextBox = styled.input`
    width: 300px;
    height: 40px;
    outline: none;
    border: none;
    margin-bottom: 10px;
    padding-left: 20px;
    font-size: 17px;
    font-family: Ubuntu;
    font-weight: 500;
`;

export const Button = styled.button`
    width: 200px;
    height: 45px;
    border: none;
    border-radius: 15px;
    background-color: #20b2aa;
    font-size: 20px;
    font-family: Ubuntu;
    font-weight: 500;
`;

export const SignUpHeader = {
    'font-family': 'Ubuntu',
    'font-size': '40px',
    'font-weight': 700
};
