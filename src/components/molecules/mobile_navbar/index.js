import {NavContainer, LogoContainer, Logo, HamburgerContainer, Hamburger} from './style';
import logo from "../../atoms/images/cover2.png";

export const MobileNavbar = ({children}) => {
    return(
        <NavContainer>
            <LogoContainer>
                <Logo src={logo}/>
            </LogoContainer>
            <HamburgerContainer>
                <Hamburger/>
            </HamburgerContainer>
        </NavContainer>
    )
}
