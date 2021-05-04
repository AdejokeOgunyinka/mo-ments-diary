import styled from "styled-components";


export const LandingPageScreen = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Canvas = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media(max-width: 320px){
    height: 200px;
  }

  @media(min-width: 360px){
    height: 250px;
  }

  @media(min-width: 411px){
    height: 300px;
  }

  @media(min-width: 768px){
    height: 400px;
  }

  @media(min-width: 1024px){
    height: 600px;
  }

`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
`;
