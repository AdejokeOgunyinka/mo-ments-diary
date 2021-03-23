import { NavContainer, LogoContainer, Logo, AllButtons, Button } from "./style";
import logo from "../../images/cover2.png";

export const NavBar = ({ children }) => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <AllButtons>
        <Button>HOME</Button>
        <Button>ABOUT US</Button>
        <Button>SIGN IN</Button>
        <Button>SIGN UP</Button>
      </AllButtons>
    </NavContainer>
  );
};
