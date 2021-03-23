import {
  AboutContainer,
  HeaderStyle,
  BodyStyle,
  TextContainer,
  PictureContainer,
  Picture,
} from "./style";
import image from "../../images/images.jpg";

export const About = ({ children }) => {
  return (
    <AboutContainer>
      <PictureContainer>
        <Picture src={image} />
      </PictureContainer>
      <TextContainer>
        <h1 style={HeaderStyle}>About MO-ments</h1>
        <p style={BodyStyle}>
          Mo-ments is an online diary made just for you. Here, you can record
          your special daily moments and add pictures to it. Feel free to speak
          your mind in words. Poets are also welcome to use Mo-ments as a means
          of expressing themselves. Make your special moments and poetry even
          more special with Mo-ments. Welcome!!!!
        </p>
      </TextContainer>
    </AboutContainer>
  );
};
