import {
  AboutContainer,
  Header,
  Text,
  TextContainer,
  PictureContainer,
  Picture,
} from "./style";
import image from "../../atoms/images/images.jpg";

export const About = ({ children }) => {
  return (
    <AboutContainer>
      <PictureContainer>
        <Picture src={image} />
      </PictureContainer>
      <TextContainer>
        <Header>About Mo-ments</Header>
        <Text>
          Mo-ments is an online diary made just for you. Here, you can record
          your special daily moments/ poetry/ plans and add pictures to it. Make your special moments and poetry even
          more special with Mo-ments. Welcome!!!!
        </Text>
      </TextContainer>
    </AboutContainer>
  );
};
