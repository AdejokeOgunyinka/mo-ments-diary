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
`;

export const TextContainer = styled.div`
  flex-basis: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const HeaderStyle = {
  "font-family": "Ubuntu",
  "font-size": "40px",
  "font-weight": 700,
};

export const BodyStyle = {
  "font-family": "Ubuntu",
  "font-size": "25px",
  "font-weight": 300,
  "margin-left": "100px",
  "margin-right": "100px",
};
